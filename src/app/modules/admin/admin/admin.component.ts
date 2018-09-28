import { Component, OnInit } from '@angular/core';
import { ConfirmService } from '../services/confirm.service';

@Component({
  selector: 'amb-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public confirm: ConfirmService) { }

  ngOnInit() {
  }

}
