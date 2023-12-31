import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.page.html',
  styleUrls: ['./login-student.page.scss'],
})
export class LoginStudentPage implements OnInit {
  @ViewChild('inputUsuario') inputUsuario!: ElementRef;
  @ViewChild('inputContraseña') inputContraseña!: ElementRef;

  formularioLoginStudent: FormGroup;

  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    private router: Router
  ) {
    this.formularioLoginStudent = this.fb.group({
      'user': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    });
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.formularioLoginStudent.get('user')?.valueChanges.subscribe(userValue => {
    });

    this.formularioLoginStudent.get('password')?.valueChanges.subscribe(passwordValue => {
    });
  }

  async ingresar() {
    var varFormularioLogin = this.formularioLoginStudent.value;
    var user = JSON.parse(localStorage.getItem('estudiante') || '{}');
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
