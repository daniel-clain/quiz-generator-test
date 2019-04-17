import DataService from "../../classes/data-service/data.service";
import {of} from 'rxjs';
import { App } from "../app";

describe ('app initialise', () => {
  describe('should subscribe to whether the app is connected to data or not', () => {
    describe('when there is connection', () => {
      test('should call onInit() and should set connected state to true', () => {
        const stubDataService = new DataService()
        stubDataService.connected = of(true)
        const testInstance = new App(stubDataService)

        expect(testInstance.connected).toBe(true)
      })
    })
  })
})