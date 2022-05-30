import { Technology } from './../../../../models/technology.model';
import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/data/data';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  data: Technology[] = Data.technology;
  selected: Technology;
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
