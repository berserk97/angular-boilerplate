import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MethodNotAllowedRoutingModule } from './method-not-allowed-routing.module';
import { MethodNotAllowedComponent } from './method-not-allowed/method-not-allowed.component';


@NgModule({
  declarations: [MethodNotAllowedComponent],
  imports: [
    CommonModule,
    MethodNotAllowedRoutingModule
  ]
})
export class MethodNotAllowedModule { }
