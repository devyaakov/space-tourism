import { ResizeServiceService } from './../../services/resize-service.service';
import { SectionAppService } from './../../services/section-app.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Item{
  name: string;
  description: string;
  routerLink: string;
  seleted: boolean;
}

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  items: Item[] = [];
  showItems: boolean = false;
  isMobile: boolean = false;

  constructor(private router: Router, private sectionService: SectionAppService, private resizer: ResizeServiceService) {
    this.items = [
      { name: "Home", description: "", routerLink: "/home", seleted: true },
      { name: "Destination", description: "", routerLink: "/destination", seleted: false },
      { name: "Crew", description: "", routerLink: "/crew", seleted: false },
      { name: "Technology", description: "", routerLink: "/technology", seleted: false }
    ];

   }

  ngOnInit(): void {
    this.sectionService.change.subscribe(name => {
      let index = this.items.findIndex(element => element.name.toLowerCase() == name.toLowerCase());

      if(index === undefined || index < 0)
        index = 0;

      this.items = this.items.map( item => {
        item.seleted = false;
        return item;
      });

      this.items[index].seleted = true;
      setTimeout(() => {}, 300);
    });
  }

  onClick(index: any){
    this.items = this.items.map( item => {
      item.seleted = false;
      return item;
    });

    if(index === undefined || index < 0)
      index = 0;

    this.items[index].seleted = true;

    this.router.navigate([this.items[index].routerLink]);

    if(this.resizer.IsMobile())
      this.showItems = !this.showItems;
  }

  onClickMenu(){
    this.showItems = !this.showItems;
  }
}
