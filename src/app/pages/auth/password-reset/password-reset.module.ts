import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordResetRoutingModule } from './password-reset-routing.module';
import { PasswordResetComponent } from './password-reset/password-reset.component';


@NgModule({
  declarations: [PasswordResetComponent],
  imports: [
    CommonModule,
    PasswordResetRoutingModule
  ]
})
export class PasswordResetModule { }
