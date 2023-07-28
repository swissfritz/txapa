import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdbluePageRoutingModule } from './adblue-routing.module';

import { AdbluePage } from './adblue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdbluePageRoutingModule
  ],
  declarations: [AdbluePage]
})
export class AdbluePageModule {}
