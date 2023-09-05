import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperarCuentaEstudiantePage } from './recuperar-cuenta-estudiante.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperarCuentaEstudiantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperarCuentaEstudiantePageRoutingModule {}
