import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordEmailSentComponent } from './forgot-password-email-sent/forgot-password-email-sent.component';
import { NoAuthGuard } from '@app/core/guards';

const routes: Routes = [
  {
    path: '',
    component: ForgotPasswordEmailSentComponent,
    canActivate: [NoAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotPasswordEmailSentRoutingModule {}
