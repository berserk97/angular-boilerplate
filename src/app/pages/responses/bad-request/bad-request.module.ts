import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadRequestRoutingModule } from './bad-request-routing.module';
import { BadRequestComponent } from './bad-request/bad-request.component';


@NgModule({
  declarations: [BadRequestComponent],
  imports: [
    CommonModule,
    BadRequestRoutingModule
  ]
})
export class BadRequestModule { }
