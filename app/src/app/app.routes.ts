import { Routes } from '@angular/router';

import { home } from './components/home/home.routes';
import { register } from './components/register/register.routes';
import { login } from './components/login/login.routes';

const defaultRouts = {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
};

export const appRoutes: Routes = [
  home,
  register,
  login,
  defaultRouts
];
