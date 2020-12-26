import { AfterViewInit, Component } from '@angular/core';
import { StylesService } from './utils/services/styles.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  desktopView = true;

  constructor(
    private stylesService: StylesService // needed in constructor to initiate service
  ) {
    this.checkDeviceBeingUsed()
  }

  ngAfterViewInit(): void {


  }


  checkDeviceBeingUsed(): void {

    this.desktopView = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? false : true

  }


}

