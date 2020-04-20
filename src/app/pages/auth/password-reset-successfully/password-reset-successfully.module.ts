import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordResetSuccessfullyRoutingModule } from './password-reset-successfully-routing.module';
import { PasswordResetSuccessfullyComponent } from './password-reset-successfully/password-reset-successfully.component';


@NgModule({
  declarations: [PasswordResetSuccessfullyComponent],
  imports: [
    CommonModule,
    PasswordResetSuccessfullyRoutingModule
  ]
})
export class PasswordResetSuccessfullyModule { }
