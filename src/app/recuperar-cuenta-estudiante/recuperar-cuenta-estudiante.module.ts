import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarCuentaEstudiantePageRoutingModule } from './recuperar-cuenta-estudiante-routing.module';

import { RecuperarCuentaEstudiantePage } from './recuperar-cuenta-estudiante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarCuentaEstudiantePageRoutingModule
  ],
  declarations: [RecuperarCuentaEstudiantePage]
})
export class RecuperarCuentaEstudiantePageModule {}
