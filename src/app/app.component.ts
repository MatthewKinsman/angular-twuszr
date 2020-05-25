import { Component, Injectable} from '@angular/core';
import {HubService} from './hub.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  constructor(
    private hubService: HubService,
  ){}
}
