import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginStudentPageRoutingModule } from './login-student-routing.module';

import { LoginStudentPage } from './login-student.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LoginStudentPageRoutingModule
  ],
  declarations: [LoginStudentPage]
})
export class LoginStudentPageModule {}
