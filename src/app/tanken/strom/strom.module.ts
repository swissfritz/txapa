import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StromPageRoutingModule } from './strom-routing.module';

import { StromPage } from './strom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StromPageRoutingModule
  ],
  declarations: [StromPage]
})
export class StromPageModule {}
