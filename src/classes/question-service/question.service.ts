import DataService from "../data-service/data.service";
import IQuestion from "../../interfaces/question.interface";
import { ITag } from "../../interfaces/tag.interface";

export class QuestionService{
  constructor(private dataService: DataService){}

  private get questions(): IQuestion[]{   
    return this.dataService.questions
  }

  getQuestionsByTag(tags: ITag[]): IQuestion[]{
    if(!tags){
      return this.questions
    }
    return this.questions.filter(
      (question: IQuestion) => question.tags.some(
        (questionTag: ITag) => tags.some(
          (argumentTag: ITag) => questionTag.id == argumentTag.id
          )
        )
      )
  }
}