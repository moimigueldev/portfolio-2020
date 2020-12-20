import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiance',
  templateUrl: './experiance.component.html',
  styleUrls: ['./experiance.component.scss']
})
export class ExperianceComponent implements OnInit {

  showMore1 = false;
  showMore2 = false;
  showMore3 = false;

  constructor() { }

  ngOnInit(): void {
  }

}
