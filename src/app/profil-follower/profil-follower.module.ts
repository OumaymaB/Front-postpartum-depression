import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilFollowerPageRoutingModule } from './profil-follower-routing.module';

import { ProfilFollowerPage } from './profil-follower.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilFollowerPageRoutingModule
  ],
  declarations: [ProfilFollowerPage]
})
export class ProfilFollowerPageModule {}
