import { ElementRef, Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Heights, Props } from '../../utils/interfaces/props'

@Injectable({
  providedIn: 'root'
})
export class StylesService {


  desktopNavigationMenu: ElementRef;
  skillsSection: ElementRef;
  experianceSection: ElementRef;
  projectsSection: ElementRef;
  introContainer: ElementRef;

  heights: Heights = {};

  props: Props = {};
  nativeElements: any;
  desktopView;
  containerHeight = 890;
  hideMenu = new Subject();


  constructor() {



    this.calculateSectionsHeights();


    window.addEventListener('scroll', () => {
      const { pageYOffset } = window;

      this.listenToActiveTab(pageYOffset);


      if (pageYOffset >= this.props.introContainerHeight) {
        this.desktopView ? this.desktopNavigationMenu.nativeElement.style.opacity = '1' : null;
      } else {
        this.desktopNavigationMenu.nativeElement.style.opacity = '0';
      };
    });

    this.checkDeviceType();






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

    this.skillsSection.nativeElement.scrollIntoView()

    switch (section) {
      case 1:
        window.scroll(0, 0);
        break;

      case 2:
        this.skillsSection.nativeElement.scrollIntoView();
        break;
      case 3:
        this.experianceSection.nativeElement.scrollIntoView();
        break;
      default:
        this.projectsSection.nativeElement.scrollIntoView();
        break;
    }

  }

  listenToActiveTab(YOffset: number) {

    const currentTab = this.desktopNavigationMenu.nativeElement.querySelector('.active')
    const tabs = this.desktopNavigationMenu.nativeElement.querySelector('.tabs');

    if (YOffset > this.heights.intro && YOffset < this.heights.skills) {
      currentTab.classList.remove('active');
      tabs.children[1].classList.add('active')
    } else if (YOffset > this.heights.skills && YOffset < this.heights.experiance) {
      currentTab.classList.remove('active');
      tabs.children[2].classList.add('active')
    } else if (YOffset > this.heights.experiance && YOffset < this.heights.projects) {
      currentTab.classList.remove('active');
      tabs.children[3].classList.add('active')
    } else {
      currentTab.classList.remove('active');
      tabs.children[0].classList.add('active')
    }



  }


  calculateSectionsHeights() {

    if (this.skillsSection === undefined && this.introContainer === undefined) {
      setTimeout(() => {
        return this.calculateSectionsHeights();
      }, 100)
    } else {
      this.heights.intro = this.introContainer.nativeElement.offsetHeight;
      this.heights.skills = this.heights.intro + this.skillsSection.nativeElement.offsetHeight;
      this.heights.experiance = this.heights.skills + this.experianceSection.nativeElement.offsetHeight;
      this.heights.projects = this.heights.experiance + this.projectsSection.nativeElement.offsetHeight;
    }

  }


  checkDeviceType(): void {
    this.desktopView = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? false : true
  }

}
