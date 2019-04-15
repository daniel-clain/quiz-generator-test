import DataService from '../dataService';
import IQuiz from '../../interfaces/quiz.interface';
import IQuestion from '../../interfaces/question.interface';
import IQuestionWithRating from '../../interfaces/questionWithRating';
import Rating from '../../types/rating';
import IQuestionWithRandomValue from '../../interfaces/questionWithRandomValue';
import RandomValue from '../../types/randomValue';
import random from '../../helper-functions/random';
import shuffle from '../../helper-functions/shuffle';


export default class QuizGenerator{

  private questionsInQuiz = 10

  constructor(private dataService: DataService){}

  generateQuiz(): IQuiz{
    const quiz: IQuiz = {questions: this.getQuizQuestions()}
    return quiz
  }

  // will select the questions with lowest random value
  private getQuizQuestions(): IQuestion[]{
    const allQuestions: IQuestion[] = this.dataService.getQuestions()
    if(allQuestions.length < 10)
      throw 'not enough questions to run quiz'
    
    const questionsWithRating: IQuestionWithRating[] =  this.rateQuestions(allQuestions)
    const questionsWithRandomValue: IQuestionWithRandomValue[] =  this.assignQuestionsRandomValue(questionsWithRating)
    const quizQuestions: IQuestion[] = shuffle(questionsWithRandomValue)
    .sort((a, b) => a.randomValue - b.randomValue)
    .slice(0, this.questionsInQuiz)
    .map((questionsWithRandomValue: IQuestionWithRandomValue): IQuestion => {
      const {randomValue, ...question} = questionsWithRandomValue
      return question
    })
    return quizQuestions
  }

  // rating is based on question correctness and how long since last asked relative to other questions
  private rateQuestions(questions: IQuestion[]): IQuestionWithRating[]{
    const {mostRecentDate, lastAskedDaysRange} = this.getLaskAskedDaysRange(questions)
    return questions.map((question: IQuestion) => {
      const correctnessRating: Rating = this.getCorrectnessRating(question)
      const lastAskedRating: Rating = this.getLastAskedRating(mostRecentDate, question.dateLastAsked, lastAskedDaysRange)
      return {...question, rating: ((correctnessRating + lastAskedRating) / 2)}
    })
  }

  // questions are rated relative to time scale of total questions
  private getLaskAskedDaysRange(questions: IQuestion[]): any{
    const datesArray = questions.map(question => question.dateLastAsked)
    const sortedDates = datesArray.sort()
    const longestAgo = sortedDates[0]
    const mostRecentDate = sortedDates[sortedDates.length - 1]
    const diffTime = Math.abs(mostRecentDate.getTime() - longestAgo.getTime());
    const lastAskedDaysRange = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return {mostRecentDate, lastAskedDaysRange}
  }

  // the longer its been since a question has been asked, the lower its rating should be
  getLastAskedRating(mostRecent: Date, questionDate: Date, dayRange: number): Rating{
    if(dayRange == 0)
      return 10
    const diffTime = Math.abs(mostRecent.getTime() - questionDate.getTime());
    const lastAskedDaysSinceMostRecent = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    if(lastAskedDaysSinceMostRecent == 0)
      return 10
    return Math.round(10 - lastAskedDaysSinceMostRecent/dayRange*10)
  }
  
  // the more a question is answered incorrectly, the lower its rating should be
  getCorrectnessRating(question: IQuestion): Rating{
    const {timesAnsweredCorrectly, timesAsked} = question
    return Math.round(timesAnsweredCorrectly/timesAsked*10)

  }

  // random value based on question rating
  private assignQuestionsRandomValue(questionsWithRating: IQuestionWithRating[]): IQuestionWithRandomValue[]{
    return questionsWithRating.map((questionWithRating: IQuestionWithRating): IQuestionWithRandomValue => {
      const {rating, ...question} = questionWithRating
      const rand = random()
      const randomValue: RandomValue = Math.round(rating * rand) as RandomValue
      const questionWithRandomValue: IQuestionWithRandomValue = {...question, randomValue}
      return questionWithRandomValue
    })
  }
}