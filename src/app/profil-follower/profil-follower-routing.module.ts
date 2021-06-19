import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilFollowerPage } from './profil-follower.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilFollowerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilFollowerPageRoutingModule {}
