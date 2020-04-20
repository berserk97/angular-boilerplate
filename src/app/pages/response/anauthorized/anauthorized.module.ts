import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnauthorizedRoutingModule } from './anauthorized-routing.module';
import { AnauthorizedComponent } from './anauthorized/anauthorized.component';


@NgModule({
  declarations: [AnauthorizedComponent],
  imports: [
    CommonModule,
    AnauthorizedRoutingModule
  ]
})
export class AnauthorizedModule { }
