import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'splash-screen',
    loadComponent: () => import('./pages/splash-screen/splash-screen.page').then( m => m.SplashScreenPage)
  },
  {
    path: 'auth-screen',
    loadComponent: () => import('./pages/auth-screen/auth-screen.page').then( m => m.AuthScreenPage)
  },
  {
    path: 'not-found',
    loadComponent: () => import('./shared/not-found/not-found.page').then( m => m.NotFoundPage)
  },
  {
    path: 'confirm-number',
    loadComponent: () => import('./pages/confirm-number/confirm-number.page').then( m => m.ConfirmNumberPage)
  },
  {
    path: 'register-form',
    loadComponent: () => import('./pages/register-form/register-form.page').then( m => m.RegisterFormPage)
  },
  {
    path: 'header',
    loadComponent: () => import('./shared/header/header.page').then( m => m.HeaderPage)
  },
  {
    path: 'instruction-set',
    loadComponent: () => import('./shared/instruction-set/instruction-set.page').then( m => m.InstructionSetPage)
  },
  {
    path: 'spinner',
    loadComponent: () => import('./shared/spinner/spinner.page').then( m => m.SpinnerPage)
  },
  {
    path: 'contract',
    loadComponent: () => import('./pages/contract/contract.page').then( m => m.ContractPage)
  },
  {
    path: 'welcome',
    loadComponent: () => import('./pages/welcome/welcome.page').then( m => m.WelcomePage)
  },
  {
    path: '',
    redirectTo: 'splash-screen',
    pathMatch: 'full',
  },
  { path: '**',
    redirectTo: 'not-found'
  }

];
