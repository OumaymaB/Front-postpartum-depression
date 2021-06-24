import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestDppPageRoutingModule } from './test-dpp-routing.module';

import { TestDppPage } from './test-dpp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestDppPageRoutingModule
  ],
  declarations: [TestDppPage]
})
export class TestDppPageModule {}
