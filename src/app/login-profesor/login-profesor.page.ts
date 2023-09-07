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
  selector: 'app-login-profesor',
  templateUrl: './login-profesor.page.html',
  styleUrls: ['./login-profesor.page.scss'],
})
export class LoginProfesorPage implements OnInit {
  @ViewChild('inputUsuario') inputUsuario!: ElementRef;
  @ViewChild('inputContraseña') inputContraseña!: ElementRef;

  formularioLoginProfesor: FormGroup = new FormGroup({
    'user': new FormControl(this.inputUsuario, Validators.required),
    'password': new FormControl(this.inputContraseña, Validators.required)
  });

  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    private router: Router 
  ) { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    const inputUsuarioValue = this.inputUsuario.nativeElement.value;
    const inputContraseñaValue = this.inputContraseña.nativeElement.value;

    this.formularioLoginProfesor.setValue({
      'user': inputUsuarioValue,
      'password': inputContraseñaValue
    });
  }

  async ingresar() {
    var varFormularioLogin = this.formularioLoginProfesor.value;
    var user = JSON.parse(localStorage.getItem('usuario') || '{}');
    console.log(varFormularioLogin.user);
    console.log(user.usuario);

    if (user.usuario === varFormularioLogin.user && user.contraseña === varFormularioLogin.password) {
      console.log("Ingresado");
      this.router.navigate(['/main-profesor']);
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

