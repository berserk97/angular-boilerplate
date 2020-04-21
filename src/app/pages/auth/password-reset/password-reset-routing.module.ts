import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { NoAuthGuard } from '@app/core/guards';

const routes: Routes = [
  { path: '', component: PasswordResetComponent, canActivate: [NoAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswordResetRoutingModule {}
