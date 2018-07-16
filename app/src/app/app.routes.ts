import { Routes } from '@angular/router';

import { AuthGuard } from './guards/auth-guard';

import { home } from './components/home/home.routes';
import { register } from './components/register/register.routes';
import { login } from './components/login/login.routes';
import { goods } from './components/goods/goods.routes';
import { PortalComponent } from './components/portal/portal.component';


const defaultRouts = {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
};

const canActivate = {
  canActivate: [AuthGuard]
};

export const appRoutes: Routes = [
  home,
  register,
  { path: 'portal', component: PortalComponent },
  login,
  Object.assign(goods, canActivate),
  defaultRouts
];
