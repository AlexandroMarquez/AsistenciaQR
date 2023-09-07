import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router'; // Asegúrate de importar el servicio Router

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.page.html',
  styleUrls: ['./login-student.page.scss'],
})
export class LoginStudentPage implements OnInit {
  @ViewChild('inputUsuario') inputUsuario!: ElementRef;
  @ViewChild('inputContraseña') inputContraseña!: ElementRef;

  formularioLoginStudent: FormGroup = new FormGroup({
    'user': new FormControl(this.inputUsuario, Validators.required),
    'password': new FormControl(this.inputContraseña, Validators.required)
  });

  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    private router: Router // Inyecta el servicio Router aquí
  ) { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    const inputUsuarioValue = this.inputUsuario.nativeElement.value;
    const inputContraseñaValue = this.inputContraseña.nativeElement.value;

    this.formularioLoginStudent.setValue({
      'user': inputUsuarioValue,
      'password': inputContraseñaValue
    });
  }

  async ingresar() {
    var varFormularioLogin = this.formularioLoginStudent.value;
    var user = JSON.parse(localStorage.getItem('usuario') || '{}');
    console.log(varFormularioLogin.user);
    console.log(user.usuario);

    if (user.usuario === varFormularioLogin.user && user.contraseña === varFormularioLogin.password) {
      console.log("Ingresado");
      this.router.navigate(['/main-student']);
    } else {
      const alert = await this.alertController.create({
        header: 'Datos Incorrectos',
        message: 'Verifica tus credenciales e intenta nuevamente.',
        buttons: ['Aceptar']
      });
      await alert.present();
    }
  }
}
