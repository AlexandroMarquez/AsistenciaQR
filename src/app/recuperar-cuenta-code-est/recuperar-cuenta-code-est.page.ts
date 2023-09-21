import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-recuperar-cuenta-code-est',
  templateUrl: './recuperar-cuenta-code-est.page.html',
  styleUrls: ['./recuperar-cuenta-code-est.page.scss'],
})
export class RecuperarCuentaCodeEstPage implements OnInit {

  codigoCambiaClave = 'CambiaClave'; 

  formularioRecuperarCuentaCodeEst: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.formularioRecuperarCuentaCodeEst = this.formBuilder.group({
      codigo: ['', Validators.required] 
    });
  }

  ngOnInit() {
  }

  cambiarClave() {
    const codigoIngresado = this.formularioRecuperarCuentaCodeEst.get('codigo')?.value;

    if (codigoIngresado === this.codigoCambiaClave) {
      console.log('vamos a cambiar la clave');
      this.router.navigate(['/recuperar-cuenta-code-est2']); 
    } else {
      console.log('Código incorrecto');
    }
  }
}
