import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WerkstattPageRoutingModule } from './werkstatt-routing.module';

import { WerkstattPage } from './werkstatt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WerkstattPageRoutingModule
  ],
  declarations: [WerkstattPage]
})
export class WerkstattPageModule {}
