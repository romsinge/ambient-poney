import { Poney } from './../../interfaces/poney';
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'amb-poney',
  templateUrl: './poney.component.html',
  styleUrls: ['./poney.component.scss']
})
export class PoneyComponent {

  @Input() poney: Poney
  @Output() win: EventEmitter<Poney> = new EventEmitter()
  intervalId

  constructor() { }

  ngOnInit() {
    this.startRunning()
  }

  startRunning() {
    this.intervalId = setInterval(() => {
      this.poney.distance += ( Math.floor(Math.random() * 20) + 1 )

      if (this.poney.distance >= 90) {
        this.win.emit(this.poney)
        this.poney.distance = 90
        this.stopRunning()
      }
    }, 1000)
  }

  stopRunning() {
    clearInterval(this.intervalId)
  }

  ngOnDestroy() {
    this.stopRunning()
    this.poney.distance = 0
  }
}
