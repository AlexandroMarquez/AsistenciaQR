import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RecuperarCuentaEstudiantePageRoutingModule } from './recuperar-cuenta-estudiante-routing.module';
import { RecuperarCuentaEstudiantePage } from './recuperar-cuenta-estudiante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // Agrega ReactiveFormsModule aquí
    IonicModule,
    RecuperarCuentaEstudiantePageRoutingModule
  ],
  declarations: [RecuperarCuentaEstudiantePage]
})
export class RecuperarCuentaEstudiantePageModule {}
