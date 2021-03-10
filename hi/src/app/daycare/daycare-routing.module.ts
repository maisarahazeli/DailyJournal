import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaycarePage } from './daycare.page';

const routes: Routes = [
  {
    path: '',
    component: DaycarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaycarePageRoutingModule {}
