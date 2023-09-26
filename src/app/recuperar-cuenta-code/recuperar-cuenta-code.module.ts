import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RecuperarCuentaCodePageRoutingModule } from './recuperar-cuenta-code-routing.module';
import { RecuperarCuentaCodePage } from './recuperar-cuenta-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    IonicModule,
    RecuperarCuentaCodePageRoutingModule
  ],
  declarations: [RecuperarCuentaCodePage]
})
export class RecuperarCuentaCodePageModule {}
