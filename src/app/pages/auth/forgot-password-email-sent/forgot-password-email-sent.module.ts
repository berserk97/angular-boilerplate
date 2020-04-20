import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPasswordEmailSentRoutingModule } from './forgot-password-email-sent-routing.module';
import { ForgotPasswordEmailSentComponent } from './forgot-password-email-sent/forgot-password-email-sent.component';


@NgModule({
  declarations: [ForgotPasswordEmailSentComponent],
  imports: [
    CommonModule,
    ForgotPasswordEmailSentRoutingModule
  ]
})
export class ForgotPasswordEmailSentModule { }
