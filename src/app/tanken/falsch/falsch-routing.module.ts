import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FalschPage } from './falsch.page';

const routes: Routes = [
  {
    path: '',
    component: FalschPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FalschPageRoutingModule {}
