import { Component } from '@angular/core';
import { StylesService } from './utils/services/styles.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private stylesService: StylesService // needed in constructor to initiate service
  ) {
  }
}

