import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StylesService } from 'src/app/utils/services/styles.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, AfterViewInit {

  showContent1 = false;
  showContent2 = false;
  showContent3 = false;


  @ViewChild('introContainer') introContainer: ElementRef;


  constructor(
    private stylesService: StylesService
  ) { }

  ngAfterViewInit(): void {

    this.stylesService.props.skillsContainerHeight = this.introContainer.nativeElement.offsetHeight;
    this.stylesService.skillsSection = this.introContainer
  }


  ngOnInit(): void {
  }

}
