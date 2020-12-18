import { Component, OnInit } from '@angular/core';
declare var VANTA;
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor() { }

  animate = false;
  cta = false

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
    setTimeout(() => this.animate = true, 1000)

    // set timeout to animate scroll down call to action
    setTimeout(() => this.cta = true, 3000)


  }

}
