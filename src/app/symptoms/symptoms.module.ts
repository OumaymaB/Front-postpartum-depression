import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SymptomsPageRoutingModule } from './symptoms-routing.module';

import { SymptomsPage } from './symptoms.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SymptomsPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [SymptomsPage],
})
export class SymptomsPageModule {}
