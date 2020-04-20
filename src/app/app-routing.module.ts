import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // auth
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule)
  }, {
    path: 'sign-up',
    loadChildren: () => import('./pages/auth/sign-up/sign-up.module').then(m => m.SignUpModule)
  }, {
    path: 'forgot-password',
    loadChildren: () => import('./pages/auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
  }, {
    path: 'forgot-password-email-sent',
    loadChildren: () => import('./pages/auth/forgot-password-email-sent/forgot-password-email-sent.module')
      .then(m => m.ForgotPasswordEmailSentModule)
  }, {
    path: 'password-reset',
    loadChildren: () => import('./pages/auth/password-reset/password-reset.module').then(m => m.PasswordResetModule)
  }, {
    path: 'password-reset-successfully',
    loadChildren: () => import('./pages/auth/password-reset-successfully/password-reset-successfully.module')
      .then(m => m.PasswordResetSuccessfullyModule)
  }, {
    path: 'password-reset-failed',
    loadChildren: () => import('./pages/auth/password-reset-failed/password-reset-failed.module')
      .then(m => m.PasswordResetFailedModule)
  },

  // response
  {
    path: 'bad-request',
    loadChildren: () => import('./pages/responses/bad-request/bad-request.module').then(m => m.BadRequestModule)
  }, {
    path: 'unauthorized',
    loadChildren: () => import('./pages/responses/unauthorized/unauthorized.module').then(m => m.UnauthorizedModule)
  }, {
    path: 'forbidden',
    loadChildren: () => import('./pages/responses/forbidden/forbidden.module').then(m => m.ForbiddenModule)
  }, {
    path: 'not-found',
    loadChildren: () => import('./pages/responses/not-found/not-found.module').then(m => m.NotFoundModule)
  }, {
    path: 'method-not-allowed',
    loadChildren: () => import('./pages/responses/method-not-allowed/method-not-allowed.module').then(m => m.MethodNotAllowedModule)
  }, {
    path: 'internal-server-error',
    loadChildren: () => import('./pages/responses/internal-server-error/internal-server-error.module')
      .then(m => m.InternalServerErrorModule)
  }, {
    path: 'service-unavailable',
    loadChildren: () => import('./pages/responses/service-unavailable/service-unavailable.module').then(m => m.ServiceUnavailableModule)
  },

  // features
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
