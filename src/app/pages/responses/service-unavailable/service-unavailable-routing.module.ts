import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceUnavailableComponent } from './service-unavailable/service-unavailable.component';


const routes: Routes = [
  { path: '', component: ServiceUnavailableComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceUnavailableRoutingModule { }
