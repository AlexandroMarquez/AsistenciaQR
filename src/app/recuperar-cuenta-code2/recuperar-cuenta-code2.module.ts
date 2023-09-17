import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { IonicModule } from '@ionic/angular';

import { RecuperarCuentaCode2PageRoutingModule } from './recuperar-cuenta-code2-routing.module';

import { RecuperarCuentaCode2Page } from './recuperar-cuenta-code2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RecuperarCuentaCode2PageRoutingModule
  ],
  declarations: [RecuperarCuentaCode2Page]
})
export class RecuperarCuentaCode2PageModule {}
