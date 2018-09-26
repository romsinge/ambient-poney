import { Component, OnInit } from '@angular/core';
import { PmuService } from '../../services/pmu.service';
import { Poney } from '../../interfaces/poney';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'amb-race-create',
  templateUrl: './race-create.component.html',
  styleUrls: ['./race-create.component.scss']
})
export class RaceCreateComponent implements OnInit {

  ponies$: Observable<Poney[]>
  raceForm: FormGroup
  nameCtrl: FormControl
  poneyIdsCtrl: FormControl

  constructor(private pmu: PmuService) { }

  poneyValidator(poneyIdsCtrl) {
    if (poneyIdsCtrl.value.length) {
      return undefined
    } else {
      return { poneyIdsLength: true }
    }
  }

  ngOnInit() {
    this.ponies$ = this.pmu.ponies

    this.nameCtrl = new FormControl('', [Validators.required])
    this.poneyIdsCtrl = new FormControl([], [this.poneyValidator])

    this.raceForm = new FormGroup({
      name: this.nameCtrl,
      poneyIds: this.poneyIdsCtrl
    })
  }

  handleSubmit() {
    this.pmu.setRace(this.raceForm.value).subscribe(race => {
      console.log('OK', race)
    })
  }

}
