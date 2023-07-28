import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FalschPageRoutingModule } from './falsch-routing.module';

import { FalschPage } from './falsch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FalschPageRoutingModule
  ],
  declarations: [FalschPage]
})
export class FalschPageModule {}
