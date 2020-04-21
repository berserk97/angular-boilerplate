import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathMap } from './core/classes/app-path-map';

const routes: Routes = [
  // auth
  {
    path: pathMap.login,
    loadChildren: () =>
      import('./pages/auth/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: pathMap.signUp,
    loadChildren: () =>
      import('./pages/auth/sign-up/sign-up.module').then((m) => m.SignUpModule),
  },
  {
    path: pathMap.forgotPassword,
    loadChildren: () =>
      import('./pages/auth/forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordModule
      ),
  },
  {
    path: pathMap.forgotPasswordEmailSent,
    loadChildren: () =>
      import(
        './pages/auth/forgot-password-email-sent/forgot-password-email-sent.module'
      ).then((m) => m.ForgotPasswordEmailSentModule),
  },
  {
    path: pathMap.passwordReset,
    loadChildren: () =>
      import('./pages/auth/password-reset/password-reset.module').then(
        (m) => m.PasswordResetModule
      ),
  },
  {
    path: pathMap.passwordResetSuccessfully,
    loadChildren: () =>
      import(
        './pages/auth/password-reset-successfully/password-reset-successfully.module'
      ).then((m) => m.PasswordResetSuccessfullyModule),
  },
  {
    path: pathMap.passwordResetFailed,
    loadChildren: () =>
      import(
        './pages/auth/password-reset-failed/password-reset-failed.module'
      ).then((m) => m.PasswordResetFailedModule),
  },

  // features
  {
    path: pathMap.home,
    loadChildren: () =>
      import('./pages/features/home/home.module').then((m) => m.HomeModule),
  },

  // responses
  {
    path: '**',
    loadChildren: () =>
      import('./pages/responses/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
  {
    path: pathMap.internalServerError,
    loadChildren: () =>
      import(
        './pages/responses/internal-server-error/internal-server-error.module'
      ).then((m) => m.InternalServerErrorModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
