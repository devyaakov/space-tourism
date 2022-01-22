import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrewComponent } from './components/crew/crew.component';
import { CrewRoutingModule } from './crew-routing.module';



@NgModule({
  declarations: [
    CrewComponent
  ],
  imports: [
    CommonModule,
    CrewRoutingModule
  ]
})
export class CrewModule { }
