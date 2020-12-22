import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StylesService } from 'src/app/utils/services/styles.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {

  @ViewChild('projects') projects: ElementRef;

  constructor(
    public stylesService: StylesService
  ) { }

  ngAfterViewInit(): void {
    this.stylesService.projectsSection = this.projects;

  }

  ngOnInit(): void {
  }

}
