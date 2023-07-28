import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WerkstattPage } from './werkstatt.page';

const routes: Routes = [
  {
    path: '',
    component: WerkstattPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WerkstattPageRoutingModule {}
