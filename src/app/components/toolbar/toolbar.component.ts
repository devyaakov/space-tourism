import { Component, OnInit } from '@angular/core';
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

  constructor(private router: Router) {
    this.items = [
      { name: "Home", description: "", routerLink: "/home", seleted: true },
      { name: "Destination", description: "", routerLink: "/destination", seleted: false },
      { name: "Crew", description: "", routerLink: "/crew", seleted: false },
      { name: "Technology", description: "", routerLink: "/technology", seleted: false }
    ];
   }

  ngOnInit(): void {

  }

  onClick(index: any){
    this.items = this.items.map( item => {
      item.seleted = false;
      return item;
    });

    this.items[index].seleted = true;

    this.router.navigate([this.items[index].routerLink]);
    this.onClickMenu();
  }

  onClickMenu(){
    // this.showItems = !this.showItems;
  }
}
