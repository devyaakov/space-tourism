import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/data/data';
import { Crew } from 'src/app/models/crew.model';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss']
})
export class CrewComponent implements OnInit {

  data: Crew[] = Data.crew;
  selected: Crew;
  index: number = 0;

  constructor() {
    this.selected = this.data[this.index];
  }

  ngOnInit(): void {
  }
  onClick(index: number){
    this.index = index;
    this.selected = this.data[this.index];
  }

}
