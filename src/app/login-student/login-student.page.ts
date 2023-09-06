import { Component, OnInit } from '@angular/core';
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

  formularioLoginStudent: FormGroup;

  constructor(public fb: FormBuilder, 
    public alertController: AlertController) { 

    this.formularioLoginStudent = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password' : new FormControl("", Validators.required)
    })

  }

  ngOnInit() {
  }

  async Ingresar() {
    var f = this.formularioLoginStudent.value;
    var usuario = JSON.parse(localStorage.getItem('usuario') || 'null');

    if (usuario && usuario.nombre == f.nombre && usuario.password == f.password) {
      console.log("Ingresado");
      // Aquí puedes redirigir al usuario a la página de inicio o realizar cualquier otra acción necesaria.
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
