import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecuperarCuentaCode2Page } from './recuperar-cuenta-code2.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperarCuentaCode2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperarCuentaCode2PageRoutingModule { }
