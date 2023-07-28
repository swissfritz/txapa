import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NutzPageRoutingModule } from './nutz-routing.module';

import { NutzPage } from './nutz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NutzPageRoutingModule
  ],
  declarations: [NutzPage]
})
export class NutzPageModule {}
