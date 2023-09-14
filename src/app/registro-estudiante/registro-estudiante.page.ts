import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro-estudiante',
  templateUrl: './registro-estudiante.page.html',
  styleUrls: ['./registro-estudiante.page.scss'],
})
export class RegistroEstudiantePage implements OnInit {

  formularioRegistroStudent: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController
  ) {

    this.formularioRegistroStudent = this.fb.group({
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
    var f = this.formularioRegistroStudent.value;

    if (this.formularioRegistroStudent.invalid) {
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
  }

  var estudiante = {
      usuario: f.usuario,
      contraseña: f.contraseña,
      nombre: f.nombre,
      apellido: f.apellido,
      rut: f.rut,
      telefono: f.telefono,
      correo: f.correo

  }
  localStorage.setItem('estudiante', JSON.stringify(estudiante));
  const alert = await this.alertController.create({
    header: 'Guardado',
    message: 'Datos guardados correctamente',
    buttons: ['Aceptar']});    
    await alert.present();
}

}