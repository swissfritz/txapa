import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DieselPageRoutingModule } from './diesel-routing.module';

import { DieselPage } from './diesel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DieselPageRoutingModule
  ],
  declarations: [DieselPage]
})
export class DieselPageModule {}
