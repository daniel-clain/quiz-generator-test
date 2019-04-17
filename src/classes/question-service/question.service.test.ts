import { QuestionService } from "./question.service";
import { ITag } from "../../interfaces/tag.interface";
import IQuestion from "../../interfaces/question.interface";
import DataService from "../data-service/data.service";
import { Observable } from "rxjs";


class MockDataService{
  connected: Observable<boolean>
  get questions(): IQuestion[]{
    const stubQuestions = [
      {value: 'fuck ya cunt', tags: [{id: 'cock', name: 'x'}]}
    ]
    return <IQuestion[]>stubQuestions
  }
}
const mockDataService: DataService = new MockDataService()

it ('should make a mock instance of data service when question service is instanciated', () => {
  

  const questionServiceInstance = new QuestionService(mockDataService)
  const returnedQuestions = questionServiceInstance.getQuestionsByTag([{id: 'cock', name: 'x'}])
  expect(returnedQuestions[0].value).toBe('fuck ya cunt')
});


xdescribe ('getQuestionsByTag', () => {
  
  describe ('test 2 questions where each one has a tag that matches one of the 2 argument tags', () => {    

    test('should return both questions', () => {      
      const argumentTags: ITag[] = [
        {
          id: 'matching tag1',
          name: 'x'
        },
        {
          id: 'matching tag2',
          name: 'x'
        }
      ]
      const stubQuestions = [
        {
          id: 'ques1',
          tags: [
            {
              id: 'matching tag1',
            },        
            {
              id: 'non matching tag',
            }
          ]
        },
        {
          id: 'ques2',
          tags: [
            {
              id: 'matching tag2',
            },        
            {
              id: 'non matching tag',
            }
          ]
        }
      ]

      const testInstance = new QuestionService(mockDataService)
      const resultQuestions: IQuestion[] = testInstance.getQuestionsByTag(argumentTags)
      expect(resultQuestions.every(resultQuestion => stubQuestions.some(stubQuestion => stubQuestion.id == resultQuestion.id)))
      expect(resultQuestions.length).toBe(2)
      
    })
    
  });
  

  describe ('test 2 questions where only one has a tag that matches one of the 2 argument tags', () => {   
    test('should return both questions', () => {      
      const argumentTags: ITag[] = [
        {
          id: 'matching tag1',
          name: 'x'
        },
        {
          id: 'matching tag2',
          name: 'x'
        }
      ]
      const stubQuestions = [
        {
          id: 'ques1',
          tags: [
            {
              id: 'matching tag1',
            },        
            {
              id: 'non matching tag',
            }
          ]
        },
        {
          id: 'ques2',
          tags: [
            {
              id: 'non matching tag',
            },        
            {
              id: 'non matching tag',
            }
          ]
        }
      ] 
      
      const testInstance = new QuestionService(mockDataService)
      const resultQuestions: IQuestion[] = testInstance.getQuestionsByTag(argumentTags)
      expect(resultQuestions.every(resultQuestion => stubQuestions.some(stubQuestion => stubQuestion.id == resultQuestion.id)))
      expect(resultQuestions.length).toBe(1)      
    })    
  })




});