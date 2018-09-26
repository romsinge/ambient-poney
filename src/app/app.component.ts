import { PmuService } from './services/pmu.service';
import { Component } from '@angular/core';
import { Poney } from './interfaces/poney';
import { Race } from './interfaces/race';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AmbientIT';
  
  handleTitleClick(): void {
    console.log('title click')
  }

  getDate(): Date {
    return new Date()
  }
}
