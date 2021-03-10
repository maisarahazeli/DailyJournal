import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaycarePageRoutingModule } from './daycare-routing.module';

import { DaycarePage } from './daycare.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaycarePageRoutingModule
  ],
  declarations: [DaycarePage]
})
export class DaycarePageModule {}
