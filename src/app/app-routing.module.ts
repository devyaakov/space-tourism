import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "home", loadChildren: () => import("./modules/home/home.module").then(m => m.HomeModule )},
  { path: "crew", loadChildren: () => import("./modules/crew/crew.module").then(m => m.CrewModule )},
  { path: "destination", loadChildren: () => import("./modules/destination/destination.module").then(m => m.DestinationModule )},
  { path: "technology", loadChildren: () => import("./modules/technology/technology.module").then(m => m.TechnologyModule )},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
