import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KontrollePageRoutingModule } from './kontrolle-routing.module';

import { KontrollePage } from './kontrolle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KontrollePageRoutingModule
  ],
  declarations: [KontrollePage]
})
export class KontrollePageModule {}
