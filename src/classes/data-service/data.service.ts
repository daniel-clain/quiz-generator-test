import IQuestion from '../../interfaces/question.interface';
import { Observable } from 'rxjs';

export default class DataService{

  connected: Observable<boolean>

  constructor(){}
  
  get questions(): IQuestion[]{
    let questions: IQuestion[] =  [
      {
        id: 'x',
        value: 'x',
        correctAnswer: 'x',
        correctnessRating: 5,
        dateLastAsked: new Date(),
        dateLastUpdated: new Date(),
        tags: []
      }
    ]
    return questions
  }


}