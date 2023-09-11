import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importa Router desde '@angular/router'

@Component({
  selector: 'app-recuperar-cuenta-code',
  templateUrl: './recuperar-cuenta-code.page.html',
  styleUrls: ['./recuperar-cuenta-code.page.scss'],
})
export class RecuperarCuentaCodePage implements OnInit {

  codigoCambiaClave = 'tuCodigoCambiaClave'; // Reemplaza esto con tu código real

  formularioRecuperarCuentaCode: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.formularioRecuperarCuentaCode = this.formBuilder.group({
      codigo: ['', Validators.required] // Definimos el control del código
    });
  }

  ngOnInit() {
  }

  cambiarClave() {
    // Obtener el valor del código ingresado en el formulario de forma segura
    const codigoIngresado = this.formularioRecuperarCuentaCode.get('codigo')?.value;

    if (codigoIngresado === this.codigoCambiaClave) {
      console.log('vamos a cambiar la clave');
      // Código válido
      // Redirigir a la página que permite editar la clave
      this.router.navigate(['/home']); // Reemplaza con la ruta correcta
    } else {
      // Código no válido
      console.log('Código incorrecto');
    }
  }
}
