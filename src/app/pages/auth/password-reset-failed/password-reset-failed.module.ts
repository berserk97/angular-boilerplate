import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordResetFailedRoutingModule } from './password-reset-failed-routing.module';
import { PasswordResetFailedComponent } from './password-reset-failed/password-reset-failed.component';


@NgModule({
  declarations: [PasswordResetFailedComponent],
  imports: [
    CommonModule,
    PasswordResetFailedRoutingModule
  ]
})
export class PasswordResetFailedModule { }
