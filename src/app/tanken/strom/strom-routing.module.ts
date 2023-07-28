import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StromPage } from './strom.page';

const routes: Routes = [
  {
    path: '',
    component: StromPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StromPageRoutingModule {}
