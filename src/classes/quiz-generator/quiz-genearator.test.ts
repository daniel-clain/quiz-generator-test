import { QuizGenertator } from "./quiz-generator";
import { QuestionService } from './../question-service/question.service'

jest.mock('../question-service/question.service')

it ('should create a mock instance of QuestionService when instantiated', () => {
  new QuizGenertator()
  expect(QuestionService).toHaveBeenCalledTimes(1)
});

describe ('generateQuiz()', () => {
  
  it ('returns a quiz with 10 questions, the questions selected should be based on how often they are answered incorrectly, and how long its been since last asked', () => {
    const arrange = (): QuizGenertator => {

      const quizGeneratorInstance = new QuizGenertator()

      return
    }
    const quizGeneratorInstance: QuizGenertator =  arrange()
  });
  
});