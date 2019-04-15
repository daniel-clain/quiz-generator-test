
import IQuestion from '../../interfaces/question.interface';


export const tenQuestionsCorrect40Percent = (): IQuestion[] => {
  const questionsCorrect40Percent: IQuestion = {
    timesAnsweredCorrectly: 4,
    timesAsked: 10,
    dateLastAsked: new Date('April 1, 2019 17:30')
  }

  const tenQuestionsCorrect40Percent: IQuestion[] = []
  for(;tenQuestionsCorrect40Percent.length < 10;){
    tenQuestionsCorrect40Percent.push(questionsCorrect40Percent)
  }
  return tenQuestionsCorrect40Percent
}

export const tenQuestionsCorrect60Percent = (): IQuestion[] => {
  const questionsCorrect60Percent: IQuestion = {
    timesAnsweredCorrectly: 6,
    timesAsked: 10,
    dateLastAsked: new Date('April 1, 2019 17:30')
  }

  const tenQuestionsCorrect60Percent: IQuestion[] = []
  for(;tenQuestionsCorrect60Percent.length < 10;){
    tenQuestionsCorrect60Percent.push(questionsCorrect60Percent)
  }
  return tenQuestionsCorrect60Percent
}



export const tenBaseDateQuestions = (): IQuestion[] =>  {
  const baseDateQuestion: IQuestion = {
    timesAnsweredCorrectly: 3,
    timesAsked: 9,
    dateLastAsked: new Date('April 21, 2019 17:30')
  }
  const tenBaseDateQuestions: IQuestion[] = []
  for(;tenBaseDateQuestions.length < 10;){
    tenBaseDateQuestions.push(baseDateQuestion)
  }
  return tenBaseDateQuestions
}

export const tenfifteenDaysEarlierQuestions = (): IQuestion[] => {
  const fifteenDaysEarlierQuestion: IQuestion = {
    timesAnsweredCorrectly: 3,
    timesAsked: 9,
    dateLastAsked: new Date('April 6, 2019 17:30')
  }
  const tenfifteenDaysEarlierQuestions: IQuestion[] = []
  for(;tenfifteenDaysEarlierQuestions.length < 10;){
    tenfifteenDaysEarlierQuestions.push(fifteenDaysEarlierQuestion)
  }
  return tenfifteenDaysEarlierQuestions
}

export const tentwentyDaysEarlierQuestions = (): IQuestion[] => {
  const twentyDaysEarlierQuestion: IQuestion = {
    timesAnsweredCorrectly: 3,
    timesAsked: 9,
    dateLastAsked: new Date('April 1, 2019 17:30')
  }
  const tentwentyDaysEarlierQuestions: IQuestion[] = []
  for(;tentwentyDaysEarlierQuestions.length < 10;){
    tentwentyDaysEarlierQuestions.push(twentyDaysEarlierQuestion)
  }
  return tentwentyDaysEarlierQuestions
}

export const nineCorrect33Percent25April = (): IQuestion[] => {
  const correct33Percent25April: IQuestion = {
    timesAnsweredCorrectly: 3,
    timesAsked: 9,
    dateLastAsked: new Date('April 25, 2019 17:30')
  }
  const nineCorrect33Percent25April: IQuestion[] = []
  for(;nineCorrect33Percent25April.length < 9;){
    nineCorrect33Percent25April.push(correct33Percent25April)
  }
  return nineCorrect33Percent25April
}
