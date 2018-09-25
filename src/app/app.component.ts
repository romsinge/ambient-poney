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
      "boost": true,
      "img": "http://ponyracer.ninja-squad.com/assets/images/pony-green-running.gif"
    },
    {
      "id": 1,
      "distance": 0,
      "name": "Oussema",
      "boost": true,
      "img": "http://ponyracer.ninja-squad.com/assets/images/pony-orange-running.gif"
    },
    {
      "id": 2,
      "distance": 0,
      "name": "Romain",
      "boost": false,
      "img": "http://ponyracer.ninja-squad.com/assets/images/pony-purple-running.gif"
    },
    {
      "id": 3,
      "distance": 0,
      "name": "François",
      "boost": true,
      "img": "http://ponyracer.ninja-squad.com/assets/images/pony-blue-running.gif"
    }
  ]
  
  handleTitleClick() {
    console.log('title click')
  }

  handleWin(poney: Poney) {
    console.log(`Victoire de ${poney.name}`)
  }
}
