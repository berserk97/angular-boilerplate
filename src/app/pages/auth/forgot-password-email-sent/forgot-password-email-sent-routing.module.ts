import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordEmailSentComponent } from './forgot-password-email-sent/forgot-password-email-sent.component';


const routes: Routes = [
  { path: '', component: ForgotPasswordEmailSentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgotPasswordEmailSentRoutingModule { }
