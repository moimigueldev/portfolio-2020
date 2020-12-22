import { ElementRef, Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Props } from '../../utils/interfaces/props'

@Injectable({
  providedIn: 'root'
})
export class StylesService {


  desktopNavigationMenu: ElementRef;
  skillsSection: ElementRef;
  experianceSection: ElementRef;
  projectsSection: ElementRef;



  props: Props = {};
  nativeElements: any;
  desktopView;
  containerHeight = 890;
  hideMenu = new Subject();
  // sectionDic = {
  //   1: 'intro',
  //   2: 
  // }


  constructor() {
    window.addEventListener('scroll', () => {
      const { pageYOffset } = window;
      // console.log('height', pageYOffset)

      if (pageYOffset >= this.props.introContainerHeight) {
        this.desktopView ? this.desktopNavigationMenu.nativeElement.style.opacity = '1' : null;
      } else {
        this.desktopNavigationMenu.nativeElement.style.opacity = '0';
      }
    });

    this.checkDeviceType();

    console.log('introHeight', this.props);




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

    this.goToSection(tabNum);

  }


  goToSection(section: number): void {

    console.log('section', section)
    this.skillsSection.nativeElement.scrollIntoView()

    switch (section) {
      case 1:
        window.scroll(0, 0)
        break;

      case 2:
        this.skillsSection.nativeElement.scrollIntoView()

        break;
      case 3:
        this.experianceSection.nativeElement.scrollIntoView()
        break;
      case 4:
        this.projectsSection.nativeElement.scrollIntoView()
        break;

      default:
        console.log('none')
        break;
    }

  }


  checkDeviceType(): void {
    this.desktopView = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? false : true
  }

}
