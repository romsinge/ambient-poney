import { Component, OnInit, Input } from '@angular/core';
import { Race } from '../../interfaces/race';
import { Poney } from '../../interfaces/poney';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'amb-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {

  @Input() race: Race

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
  
  constructor(private uppercasePipe: UpperCasePipe) {}

  ngOnInit() {
  }

  handleWin(poney: Poney): void {
    console.log(
      this.uppercasePipe.transform(`Victoire de ${poney.name}`)
    )
  }

}
