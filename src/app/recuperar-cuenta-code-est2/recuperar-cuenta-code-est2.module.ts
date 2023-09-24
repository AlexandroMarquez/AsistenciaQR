import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { IonicModule } from '@ionic/angular';
import { RecuperarCuentaCodeEst2PageRoutingModule } from './recuperar-cuenta-code-est2-routing.module';
import { RecuperarCuentaCodeEst2Page } from './recuperar-cuenta-code-est2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RecuperarCuentaCodeEst2PageRoutingModule
  ],
  declarations: [RecuperarCuentaCodeEst2Page]
})
export class RecuperarCuentaCodeEst2PageModule {}
