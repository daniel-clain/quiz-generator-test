import IQuestion from './question.interface';
import Rating from '../types/rating';

export default interface IQuestionWithRating extends IQuestion{
  rating: Rating
}