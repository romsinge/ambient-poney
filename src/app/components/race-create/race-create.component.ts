import { AppState } from './../../app.state';
import { Component, OnInit } from '@angular/core';
import { PmuService } from '../../services/pmu.service';
import { Poney } from '../../interfaces/poney';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as RaceActions from '../../actions/race.actions'
import { Race } from '../../interfaces/race';

@Component({
  selector: 'amb-race-create',
  templateUrl: './race-create.component.html',
  styleUrls: ['./race-create.component.scss']
})
export class RaceCreateComponent implements OnInit {

  ponies$: Observable<Poney[]>
  races$: Observable<Race[]>
  raceForm: FormGroup
  nameCtrl: FormControl
  poneyIdsCtrl: FormControl

  constructor(
    private pmu: PmuService,
    private store: Store<AppState>
  ) { }

  poneyValidator(poneyIdsCtrl) {
    if (poneyIdsCtrl.value.length) {
      return undefined
    } else {
      return { poneyIdsLength: true }
    }
  }

  ngOnInit() {
    this.ponies$ = this.pmu.ponies
    this.races$ = this.store.select('race')

    this.nameCtrl = new FormControl('', [Validators.required])
    this.poneyIdsCtrl = new FormControl([], [this.poneyValidator])

    this.raceForm = new FormGroup({
      name: this.nameCtrl,
      poneyIds: this.poneyIdsCtrl
    })
  }

  handleSubmit() {
    // this.pmu.setRace(this.raceForm.value).subscribe(race => {
    //   console.log('OK', race)
    // })

    this.store.dispatch(new RaceActions.AddRace({...this.raceForm.value, id: Math.floor(Math.random() * 1000)}))
  }

}
