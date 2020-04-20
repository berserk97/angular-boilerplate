import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InternalServerErrorComponent } from './internal-server-error/internal-server-error.component';


const routes: Routes = [
  { path: '', component: InternalServerErrorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternalServerErrorRoutingModule { }
