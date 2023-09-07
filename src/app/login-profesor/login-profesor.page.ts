import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login-profesor',
  templateUrl: './login-profesor.page.html',
  styleUrls: ['./login-profesor.page.scss'],
})
export class LoginProfesorPage implements OnInit {
  @ViewChild('inputUsuario') inputUsuario!: ElementRef;
  @ViewChild('inputContraseña') inputContraseña!: ElementRef;

  formularioLoginProfesor: FormGroup;

  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    private router: Router 
  ) {
    this.formularioLoginProfesor = this.fb.group({
      'user': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    // Escuchar los cambios en los controles del formulario
    this.formularioLoginProfesor.get('user')?.valueChanges.subscribe(userValue => {
      // Realizar acciones cuando cambie el valor de 'user'
      // Puedes acceder a 'userValue' aquí
    });

    this.formularioLoginProfesor.get('password')?.valueChanges.subscribe(passwordValue => {
      // Realizar acciones cuando cambie el valor de 'password'
      // Puedes acceder a 'passwordValue' aquí
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
