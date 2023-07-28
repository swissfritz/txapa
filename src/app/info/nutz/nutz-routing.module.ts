import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NutzPage } from './nutz.page';

const routes: Routes = [
  {
    path: '',
    component: NutzPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NutzPageRoutingModule {}
