import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KontrollePage } from './kontrolle.page';

const routes: Routes = [
  {
    path: '',
    component: KontrollePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KontrollePageRoutingModule {}
