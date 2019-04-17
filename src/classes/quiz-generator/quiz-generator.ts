import IQuiz from "../../interfaces/quiz.interface";
import { QuestionService } from "../question-service/question.service";
import IQuestion from "../../interfaces/question.interface";
import { ITag } from "../../interfaces/tag.interface";

export class QuizGenertator{
  
  constructor(private questionService: QuestionService){}

  public generateQuiz(quizTags?: ITag[]): IQuiz {
    const tagFilteredQuestions: IQuestion[] = this.questionService.getQuestionsByTag(quizTags)
    return {
      questions: this.choseQuizQuestions(tagFilteredQuestions)
    }
  }

  private choseQuizQuestions(tagFilteredQuestions: IQuestion[]): IQuestion[]{
    return tagFilteredQuestions.slice(0, 10)
  }
}