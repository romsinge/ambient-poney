import { Poney } from './../../interfaces/poney';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'amb-poney',
  templateUrl: './poney.component.html',
  styleUrls: ['./poney.component.scss']
})
export class PoneyComponent {

  @Input() poney: Poney

  constructor() { }

  ngOnInit() {
  }

}
