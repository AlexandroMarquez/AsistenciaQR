import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomerePage } from './homere.page';

const routes: Routes = [
  {
    path: '',
    component: HomerePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomerePageRoutingModule {}
