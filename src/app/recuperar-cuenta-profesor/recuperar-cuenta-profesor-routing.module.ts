import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecuperarCuentaProfesorPage } from './recuperar-cuenta-profesor.page';
import { RecuperarCuentaCodePage } from '../recuperar-cuenta-code/recuperar-cuenta-code.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperarCuentaProfesorPage
  },
  {
    path: 'RecuperarCuentaCode', // Esta es la ruta para RecuperarCuentaCodePage
    component: RecuperarCuentaCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperarCuentaProfesorPageRoutingModule {}
