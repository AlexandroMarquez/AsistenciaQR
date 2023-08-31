import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainStudentPageRoutingModule } from './main-student-routing.module';

import { MainStudentPage } from './main-student.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainStudentPageRoutingModule
  ],
  declarations: [MainStudentPage]
})
export class MainStudentPageModule {}
