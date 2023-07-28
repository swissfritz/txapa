import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { B2PageRoutingModule } from './b2-routing.module';

import { B2Page } from './b2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    B2PageRoutingModule
  ],
  declarations: [B2Page]
})
export class B2PageModule {}
