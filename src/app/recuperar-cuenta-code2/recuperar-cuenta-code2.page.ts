import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-recuperar-cuenta-code2',
  templateUrl: './recuperar-cuenta-code2.page.html',
  styleUrls: ['./recuperar-cuenta-code2.page.scss'],
})
export class RecuperarCuentaCode2Page  implements OnInit {
  formularioNewPass: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.formularioNewPass = this.formBuilder.group({
      newpassword: ['', Validators.required],
    });
  }

  ngOnInit() {}

  cambiarContraseña() {
    // Obtén la nueva contraseña desde el formulario
    const newpassword = this.formularioNewPass.get('newpassword')?.value;

    // Obtiene el objeto 'profesor' del Local Storage
    const profesorEnLocalStorage = localStorage.getItem('profesor');

    
    console.log(newpassword);
    console.log(profesorEnLocalStorage);
     }
}
