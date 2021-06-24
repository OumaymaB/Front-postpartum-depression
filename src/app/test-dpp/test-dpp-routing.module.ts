import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestDppPage } from './test-dpp.page';

const routes: Routes = [
  {
    path: '',
    component: TestDppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestDppPageRoutingModule {}
