import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomerePageRoutingModule } from './homere-routing.module';

import { HomerePage } from './homere.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomerePageRoutingModule
  ],
  declarations: [HomerePage]
})
export class HomerePageModule {}
