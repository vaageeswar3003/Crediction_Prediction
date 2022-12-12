import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginHomePagePage } from './login-home-page.page';

const routes: Routes = [
  {
    path: '',
    component: LoginHomePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginHomePagePageRoutingModule {}
