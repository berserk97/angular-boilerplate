import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BadRequestComponent } from './bad-request/bad-request.component';


const routes: Routes = [
  { path: '', component: BadRequestComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BadRequestRoutingModule { }
