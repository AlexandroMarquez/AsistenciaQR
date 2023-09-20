import { FormControl} from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { RouterLink, Router } from '@angular/router';


@Component({
  selector: 'app-recuperar-cuenta-profesor',
  templateUrl: './recuperar-cuenta-profesor.page.html',
  styleUrls: ['./recuperar-cuenta-profesor.page.scss'],
})
export class RecuperarCuentaProfesorPage implements OnInit {

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


    const profesorEnLocalStorage = localStorage.getItem('profesor');
    console.log(profesorEnLocalStorage);

    if (!profesorEnLocalStorage) {
      console.error('El objeto profesor no se encontró en el Local Storage.');
      return;
    }

    try {
      const profesor = JSON.parse(profesorEnLocalStorage);
      console.log("Este es el correo del profesor> " + profesor.correo);

      if (profesor.correo === f.mail) {
        console.log('El correo ingresado coincide con el correo almacenado en el Local Storage.');
        this.router.navigate(['/recuperar-cuenta-code']);
        
      } else {
        console.log('El correo ingresado no coincide con el correo almacenado en el Local Storage.');
        
      }
    } catch (error) {
      console.error('Error al analizar el objeto estudiante del Local Storage:', error);
    }
  }

  limpiar() {
    this.formularioRecuperarCuenta.reset();
  }
}
