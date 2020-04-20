import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceUnavailableRoutingModule } from './service-unavailable-routing.module';
import { ServiceUnavailableComponent } from './service-unavailable/service-unavailable.component';


@NgModule({
  declarations: [ServiceUnavailableComponent],
  imports: [
    CommonModule,
    ServiceUnavailableRoutingModule
  ]
})
export class ServiceUnavailableModule { }
