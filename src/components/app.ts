import DataService from "../classes/data-service/data.service";

export class App{
  connected: boolean
  constructor(private dataService: DataService){
    this.onInit()
  }
  private onInit(){
    this.dataService.connected.subscribe(
      (connected: boolean) => {
        this.connected = connected
      }
    )
  }
}