import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainStudentPage } from './main-student.page';

const routes: Routes = [
  {
    path: '',
    component: MainStudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainStudentPageRoutingModule {}
