import { ElementRef, Injectable, OnDestroy } from '@angular/core';
import { Props } from '../../utils/interfaces/props'

@Injectable({
  providedIn: 'root'
})
export class StylesService {


  desktopNavigationMenu: ElementRef
  props: Props = {};
  nativeElements: any;

  containerHeight = 890;

  constructor(

  ) {
    window.addEventListener('scroll', () => {
      const { pageYOffset } = window
      if (pageYOffset >= this.props.introContainerHeight) {
        this.desktopNavigationMenu.nativeElement.style.opacity = '1';
      } else {
        this.desktopNavigationMenu.nativeElement.style.opacity = '0';
      }
    });

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



  }



}
