import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperarCuentaCodeEstPage } from './recuperar-cuenta-code-est.page';

const routes: Routes = [
  {
    path: 'recuperar-cuenta-code-est', // Ruta en minúsculas y con guiones
    component: RecuperarCuentaCodeEstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperarCuentaCodeEstPageRoutingModule {}
