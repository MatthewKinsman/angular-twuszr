import { Injectable } from '@angular/core';


@Injectable()
export class HubService {
  

  constructor() { 
    var connection = $.hubConnection();
  }

}