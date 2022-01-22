import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TechnologyComponent } from './components/technology/technology.component';

const routes: Routes = [
  { path: "", component: TechnologyComponent, children:[
    { path: "technology", component: TechnologyComponent}
  ] }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TechnologyRoutingModule { }
