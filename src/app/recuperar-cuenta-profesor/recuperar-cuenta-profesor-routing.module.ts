import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperarCuentaProfesorPage } from './recuperar-cuenta-profesor.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperarCuentaProfesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperarCuentaProfesorPageRoutingModule {}
