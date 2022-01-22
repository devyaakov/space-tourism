import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CrewComponent } from './components/crew/crew.component';

const routes: Routes = [
  { path: "", component: CrewComponent, children:[
    { path: "Crew", component: CrewComponent}
  ] }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class CrewRoutingModule { }
