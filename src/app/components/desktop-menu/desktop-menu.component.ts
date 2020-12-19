import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StylesService } from 'src/app/utils/services/styles.service';

@Component({
  selector: 'app-desktop-menu',
  templateUrl: './desktop-menu.component.html',
  styleUrls: ['./desktop-menu.component.scss']
})
export class DesktopMenuComponent implements OnInit, AfterViewInit {

  @ViewChild('desktopMenu') desktopMenu: ElementRef;
  @ViewChild('tabsMenu') tabsMenu: ElementRef;

  showRightArrow = true;
  showLeftArrow = false;
  show = true;

  constructor(
    public stylesService: StylesService
  ) { }

  ngAfterViewInit(): any {
    console.log(this.desktopMenu)
    this.stylesService.desktopNavigationMenu = this.desktopMenu



  }

  ngOnInit(): void {
    this.stylesService.hideMenu.subscribe(res => {

      // this.show = false;
      this.showMenu();

    })
  }


  hideMenu(): void {
    console.log('clicking ')
    this.showRightArrow = !false;
    this.showLeftArrow = !true;
    this.show = !false;


  }

  showMenu(): void {
    this.showRightArrow = false;
    this.showLeftArrow = true;
    this.show = false;

  }

}
