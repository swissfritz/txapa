import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdbluePage } from './adblue.page';

const routes: Routes = [
  {
    path: '',
    component: AdbluePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdbluePageRoutingModule {}
