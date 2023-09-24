import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecuperarCuentaCodeEst2Page } from './recuperar-cuenta-code-est2.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperarCuentaCodeEst2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperarCuentaCodeEst2PageRoutingModule {}
