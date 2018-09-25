import { Component } from '@angular/core';
import { Poney } from './interfaces/poney';
import { Race } from './interfaces/race';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AmbientIT';

  races: Race[] = [
    {
      "id": 0,
      "name": "Madrid",
      "poneyIds": [0, 1]
    },
    {
      "id": 1,
      "name": "Tokyo",
      "poneyIds": [2, 3]
    }
  ]
  
  handleTitleClick(): void {
    console.log('title click')
  }

  getDate(): Date {
    return new Date()
  }
}
