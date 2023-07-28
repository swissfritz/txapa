import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PraemiePageRoutingModule } from './praemie-routing.module';

import { PraemiePage } from './praemie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PraemiePageRoutingModule
  ],
  declarations: [PraemiePage]
})
export class PraemiePageModule {}
