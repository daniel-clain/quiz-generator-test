import IQuestion from './question.interface';
import RandomValue from '../types/randomValue';

export default interface IQuestionWithRandomValue extends IQuestion{
  randomValue: RandomValue
}