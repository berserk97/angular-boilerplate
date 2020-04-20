import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordResetFailedComponent } from '../password-reset-failed/password-reset-failed/password-reset-failed.component';


const routes: Routes = [
  { path: '', component: PasswordResetFailedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordResetRoutingModule { }
