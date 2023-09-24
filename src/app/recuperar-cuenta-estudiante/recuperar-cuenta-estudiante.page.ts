import { FormControl} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-cuenta-estudiante',
  templateUrl: './recuperar-cuenta-estudiante.page.html',
  styleUrls: ['./recuperar-cuenta-estudiante.page.scss'],
})
export class RecuperarCuentaEstudiantePage implements OnInit {

  formularioRecuperarCuenta: FormGroup;

  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    private router: Router
  ) {

    this.formularioRecuperarCuenta = this.fb.group({
      mail: new FormControl("", Validators.required)
    });

  }

  ngOnInit() {}

  async enviarMail() {
    const f = this.formularioRecuperarCuenta.value;

    if (this.formularioRecuperarCuenta.invalid) {
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Debes llenar el campo correctamente.',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }

    // Obtener el objeto 'estudiante' del Local Storage
    const estudianteEnLocalStorage = localStorage.getItem('estudiante');
    console.log(estudianteEnLocalStorage);

    if (!estudianteEnLocalStorage) {
      console.error('El objeto estudiante no se encontró en el Local Storage.');
      return;
    }

    try {
      const estudiante = JSON.parse(estudianteEnLocalStorage);
      console.log("Este es el correo del estudiante> " + estudiante.correo);

      if (estudiante.correo === f.mail) {
        console.log('El correo ingresado coincide con el correo almacenado en el Local Storage.');
        this.router.navigate(['/recuperar-cuenta-code-est']); 
      } else {
        console.log('El correo ingresado no coincide con el correo almacenado en el Local Storage.');
        // Realiza aquí la acción que desees cuando no coincidan
      }
    } catch (error) {
      console.error('Error al analizar el objeto estudiante del Local Storage:', error);
    }
  }

  limpiar() {
    this.formularioRecuperarCuenta.reset();
  }
}
