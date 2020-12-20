import { ElementRef, Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Props } from '../../utils/interfaces/props'

@Injectable({
  providedIn: 'root'
})
export class StylesService {


  desktopNavigationMenu: ElementRef
  props: Props = {};
  nativeElements: any;
  desktopView
  containerHeight = 890;
  hideMenu = new Subject();


  constructor() {
    // window.addEventListener('scroll', () => {
    //   const { pageYOffset } = window
    //   if (pageYOffset >= this.props.introContainerHeight) {
    //     this.desktopView ? this.desktopNavigationMenu.nativeElement.style.opacity = '1' : null;
    //   } else {
    //     this.desktopNavigationMenu.nativeElement.style.opacity = '0';
    //   }
    // });

    this.checkDeviceType();



  }

  logData(): void {
    console.log('data', this.props)
  }

  introScrollDown(): void {
    window.scroll(0, this.props.introContainerHeight)
    this.changeActiveTab(1)
  }

  changeActiveTab(tabNum: number) {

    const tabs = this.desktopNavigationMenu.nativeElement.querySelector('.tabs').children;

    for (let index = 0; index < tabs.length; index++) {
      if (index + 1 === tabNum) {
        tabs[index].classList.add('active')
      } else {
        tabs[index].classList.remove('active')
      }
    }

    if (!this.desktopView) {
      this.desktopNavigationMenu.nativeElement.classList.remove('show')
      this.hideMenu.next('hide')
    }

  }


  checkDeviceType(): void {
    this.desktopView = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? false : true
    console.log('deviceTyhpe', this.desktopView)
  }

}
