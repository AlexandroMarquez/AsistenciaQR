import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importa Router desde '@angular/router'

@Component({
  selector: 'app-recuperar-cuenta-code',
  templateUrl: './recuperar-cuenta-code.page.html',
  styleUrls: ['./recuperar-cuenta-code.page.scss'],
})
export class RecuperarCuentaCodePage implements OnInit {

  codigoCambiaClave = 'CambiaClave'; 

  formularioRecuperarCuentaCode: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.formularioRecuperarCuentaCode = this.formBuilder.group({
      codigo: ['', Validators.required] 
    });
  }

  ngOnInit() {
  }

  cambiarClave() {
    const codigoIngresado = this.formularioRecuperarCuentaCode.get('codigo')?.value;

    if (codigoIngresado === this.codigoCambiaClave) {
      console.log('vamos a cambiar la clave');
      this.router.navigate(['/recuperar-cuenta-code2']); 
    } else {
      console.log('Código incorrecto');
    }
  }
}
