import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PraemiePage } from './praemie.page';

const routes: Routes = [
  {
    path: '',
    component: PraemiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PraemiePageRoutingModule {}
