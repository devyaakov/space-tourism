import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DestinationComponent } from './components/destination/destination.component';

const routes: Routes = [
  { path: "", component: DestinationComponent, children:[
    { path: "destination", component: DestinationComponent}
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
export class DestinationRoutingModule { }
