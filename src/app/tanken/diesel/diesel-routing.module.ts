import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DieselPage } from './diesel.page';

const routes: Routes = [
  {
    path: '',
    component: DieselPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DieselPageRoutingModule {}
