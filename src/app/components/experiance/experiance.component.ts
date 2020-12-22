import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StylesService } from 'src/app/utils/services/styles.service';

@Component({
  selector: 'app-experiance',
  templateUrl: './experiance.component.html',
  styleUrls: ['./experiance.component.scss']
})
export class ExperianceComponent implements OnInit, AfterViewInit {

  showMore1 = false;
  showMore2 = false;
  showMore3 = false;

  @ViewChild('experiance') experiance: ElementRef;

  constructor(
    public stylesService: StylesService
  ) { }


  ngAfterViewInit(): void {
    this.stylesService.experianceSection = this.experiance;
  }

  ngOnInit(): void {
  }

}
