import { Data } from './../../../../data/data';
import { Destination } from './../../../../models/destination.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {

  data: Destination[] = Data.destinations;
  selected: Destination;
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
