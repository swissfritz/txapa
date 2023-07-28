import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UlistPageRoutingModule } from './ulist-routing.module';

import { UlistPage } from './ulist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UlistPageRoutingModule
  ],
  declarations: [UlistPage]
})
export class UlistPageModule {}
