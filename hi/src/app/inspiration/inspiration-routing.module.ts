import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InspirationPage } from './inspiration.page';

const routes: Routes = [
  {
    path: '',
    component: InspirationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InspirationPageRoutingModule {}
