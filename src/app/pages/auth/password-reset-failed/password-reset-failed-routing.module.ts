import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordResetFailedComponent } from './password-reset-failed/password-reset-failed.component';
import { NoAuthGuard } from '@app/core/guards';

const routes: Routes = [
  {
    path: '',
    component: PasswordResetFailedComponent,
    canActivate: [NoAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswordResetFailedRoutingModule {}
