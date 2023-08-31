import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainProfesorPage } from './main-profesor.page';

const routes: Routes = [
  {
    path: '',
    component: MainProfesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainProfesorPageRoutingModule {}
