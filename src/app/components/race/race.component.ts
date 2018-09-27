import { getRaceById } from './../../store/selectors';
import { Component, OnInit, Input } from '@angular/core';
import { Race } from '../../interfaces/race';
import { Poney } from '../../interfaces/poney';
import { UpperCasePipe } from '@angular/common';
import { PmuService } from '../../services/pmu.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';

@Component({
  selector: 'amb-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {

  race: Race
  poneyIds: Array<number> = []

  ponies$: Observable<Poney[]>
  
  constructor(
    private uppercasePipe: UpperCasePipe,
    private pmu: PmuService,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit() {

    this.route.params
    .pipe(map((urlParams) => urlParams.id))
    .subscribe((id) => { 

      this.store.select(getRaceById(id)).subscribe(race => {
        this.race = race
        this.poneyIds = race.poneyIds
      })
    })

    this.ponies$ = this.pmu.ponies
  }

  handleWin(poney: Poney): void {
    console.log(
      this.uppercasePipe.transform(`Victoire de ${poney.name}`)
    )
  }

}
