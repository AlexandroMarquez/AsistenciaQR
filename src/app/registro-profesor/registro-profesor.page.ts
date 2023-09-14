// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-registro-profesor',
//   templateUrl: './registro-profesor.page.html',
//   styleUrls: ['./registro-profesor.page.scss'],
// })
// export class RegistroProfesorPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro-profesor',
  templateUrl: './registro-profesor.page.html',
  styleUrls: ['./registro-profesor.page.scss'],
})
export class RegistroProfesorPage implements OnInit {

  formularioRegistroProfesor: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController
  ) {

    this.formularioRegistroProfesor = this.fb.group({
      'usuario': new FormControl("", Validators.required),
      'contraseña': new FormControl("", Validators.required),
      'nombre': new FormControl("", Validators.required),
      'apellido': new FormControl("", Validators.required),
      'rut': new FormControl("", Validators.required),
      'telefono': new FormControl("", Validators.required),
      'correo': new FormControl("", Validators.required)
    })

  }
  ngOnInit() {
  }

  async guardar() {
    var f = this.formularioRegistroProfesor.value;

    if (this.formularioRegistroProfesor.invalid) {
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
  }

  var profesor = {
      usuario: f.usuario,
      contraseña: f.contraseña,
      nombre: f.nombre,
      apellido: f.apellido,
      rut: f.rut,
      telefono: f.telefono,
      correo: f.correo

  }

  localStorage.setItem('profesor', JSON.stringify(profesor));
  const alert = await this.alertController.create({
    header: 'Guardado',
    message: 'Datos guardados correctamente',
    buttons: ['Aceptar']});    
    await alert.present();
}

}