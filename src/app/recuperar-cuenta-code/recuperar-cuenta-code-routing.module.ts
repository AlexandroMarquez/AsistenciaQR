import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecuperarCuentaCodePage } from './recuperar-cuenta-code.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperarCuentaCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperarCuentaCodePageRoutingModule {}
