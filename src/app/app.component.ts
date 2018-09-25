import { Component } from '@angular/core';
import { Poney } from './interfaces/poney';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AmbientIT';

  ponies: Poney[] = [
    {
      "id": 0,
      "distance": 0,
      "name": "Fatah",
      "img": "http://ponyracer.ninja-squad.com/assets/images/pony-green-running.gif"
    },
    {
      "id": 1,
      "distance": 0,
      "name": "Oussema",
      "img": "http://ponyracer.ninja-squad.com/assets/images/pony-orange-running.gif"
    },
    {
      "id": 2,
      "distance": 0,
      "name": "Romain",
      "img": "http://ponyracer.ninja-squad.com/assets/images/pony-purple-running.gif"
    }
  ]
  
  handleTitleClick() {
    console.log('title click')
  }
}
