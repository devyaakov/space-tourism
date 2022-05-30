import { RectModel } from './../models/rect.model';
import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResizeServiceService {

  @Output() onResize = new EventEmitter<RectModel>();
  isMobile: boolean = false;

  constructor() { }

  resize(rect: RectModel)
  {
    if(rect.width <= 992)
      this.isMobile = true;
    else
      this.isMobile = false;

    this.onResize.emit(rect);
  }

  IsMobile(){
    return this.isMobile;
  }
}
