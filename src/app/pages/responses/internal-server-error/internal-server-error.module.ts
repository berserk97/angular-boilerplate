import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternalServerErrorRoutingModule } from './internal-server-error-routing.module';
import { InternalServerErrorComponent } from './internal-server-error/internal-server-error.component';


@NgModule({
  declarations: [InternalServerErrorComponent],
  imports: [
    CommonModule,
    InternalServerErrorRoutingModule
  ]
})
export class InternalServerErrorModule { }
