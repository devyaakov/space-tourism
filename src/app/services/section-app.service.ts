import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SectionAppService {

  @Output()
  click = new EventEmitter<string>();

  @Output()
  change = new EventEmitter<string>();

  constructor() { }

  clickHome(){
    this.click.emit("home");
  }

  clickDestination(){
    this.click.emit("destination");
  }

  clickCrew(){
    this.click.emit("crew");
  }

  clickTechnology(){
    this.click.emit("technology");
  }

}
