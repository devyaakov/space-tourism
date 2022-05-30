import { ResizeServiceService } from './services/resize-service.service';
import { Event, NavigationEnd, Router } from '@angular/router';
import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { SectionAppService } from './services/section-app.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'space-tourism';
  destination = "destination";
  crew = "crew";
  technology = "technology";
  home = "home";

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.resizer.resize({ width: event.target.innerWidth, heigth: event.target.innerHeigth });
  }

  constructor(private sectionService: SectionAppService, private renderer: Renderer2, private router: Router, private resizer: ResizeServiceService){
    this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {

            let elem = event.url.replace("/","");
            sectionService.change.emit(elem);
            this.loadBody(elem);
      }

      this.resizer.resize({ width: window.innerWidth, heigth: window.innerHeight});

  });
  }
  ngOnInit(): void {


    this.sectionService.click.subscribe(opt => {
      this.loadBody(opt);
    });

  }

  loadBody(name: string){
    this.renderer.removeClass(document.body, this.destination);
      this.renderer.removeClass(document.body, this.crew);
      this.renderer.removeClass(document.body, this.technology);
      this.renderer.removeClass(document.body, this.home);
      this.renderer.addClass(document.body, name);

      setTimeout(() => {}, 300);
  }
}
