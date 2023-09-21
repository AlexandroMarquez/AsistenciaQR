import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Asegúrate de importar ReactiveFormsModule aquí

import { IonicModule } from '@ionic/angular';

import { RecuperarCuentaCodeEstPageRoutingModule } from './recuperar-cuenta-code-est-routing.module';

import { RecuperarCuentaCodeEstPage } from './recuperar-cuenta-code-est.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    IonicModule,
    RecuperarCuentaCodeEstPageRoutingModule
  ],
  declarations: [RecuperarCuentaCodeEstPage]
})
export class RecuperarCuentaCodeEstPageModule {}
