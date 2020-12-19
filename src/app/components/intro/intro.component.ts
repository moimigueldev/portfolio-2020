import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { StylesService } from 'src/app/utils/services/styles.service';
declare var VANTA;
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit, AfterViewInit {

  constructor(
    public stylesService: StylesService
  ) { }

  animate = false;
  cta = false


  @ViewChild('introContainer') introContainer: ElementRef;

  ngAfterViewInit(): void {

    this.stylesService.props.introContainerHeight = this.introContainer.nativeElement.offsetHeight;


  }

  ngOnInit(): void {


    // set dynamic globe background
    // VANTA.GLOBE({
    //   el: "#intro",
    //   mouseControls: true,
    //   touchControls: true,
    //   gyroControls: false,
    //   minHeight: 200.00,
    //   minWidth: 200.00,
    //   scale: 1.00,
    //   scaleMobile: 1.00
    // })

    // VANTA.CLOUDS({
    //   el: "#intro",
    //   mouseControls: true,
    //   touchControls: true,
    //   gyroControls: false,
    //   minHeight: 200.00,
    //   minWidth: 200.00
    // })

    VANTA.HALO({
      el: "#intro",
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      texturePath: 'assets/noise.png'
    })
    // animate heading content
    setTimeout(() => this.animate = true, 100)

    // set timeout to animate scroll down call to action
    setTimeout(() => this.cta = true, 2000)


  }

}
