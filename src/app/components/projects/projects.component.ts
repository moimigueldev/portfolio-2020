import { Component, OnInit } from '@angular/core';
import { StylesService } from 'src/app/utils/services/styles.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(
    public stylesService: StylesService
  ) { }

  ngOnInit(): void {
  }

}
