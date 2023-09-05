import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarCuentaProfesorPageRoutingModule } from './recuperar-cuenta-profesor-routing.module';

import { RecuperarCuentaProfesorPage } from './recuperar-cuenta-profesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarCuentaProfesorPageRoutingModule
  ],
  declarations: [RecuperarCuentaProfesorPage]
})
export class RecuperarCuentaProfesorPageModule {}
