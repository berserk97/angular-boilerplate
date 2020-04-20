import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MethodNotAllowedComponent } from './method-not-allowed/method-not-allowed.component';


const routes: Routes = [
  { path: '', component: MethodNotAllowedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MethodNotAllowedRoutingModule { }
