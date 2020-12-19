import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  showContent1 = false;
  showContent2 = false;
  showContent3 = false;

  constructor() { }

  ngOnInit(): void {
  }

}
