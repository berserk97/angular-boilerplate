import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NoAuthGuard } from '@app/core/guards';

const routes: Routes = [
  { path: '', component: ForgotPasswordComponent, canActivate: [NoAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotPasswordRoutingModule {}
