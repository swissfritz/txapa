import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UlistPage } from './ulist.page';

const routes: Routes = [
  {
    path: '',
    component: UlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UlistPageRoutingModule {}
