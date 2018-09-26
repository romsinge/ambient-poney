import { Component, OnInit } from '@angular/core';
import { Race } from '../../interfaces/race';
import { PmuService } from '../../services/pmu.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'amb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  races$: Observable<Race[]>

  constructor(private pmu: PmuService) {}

  ngOnInit() {
    this.races$ = this.pmu.races
  }

}
