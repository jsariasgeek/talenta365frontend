import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegionsComponent } from './regions/regions.component';
import { RegionDetailComponent } from './region-detail/region-detail.component';

const routes: Routes = [
  {path:'', component:RegionsComponent},
  {path:'edit/:id', component:RegionDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
