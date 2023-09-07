import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperar-cuenta-estudiante',
  templateUrl: './recuperar-cuenta-estudiante.page.html',
  styleUrls: ['./recuperar-cuenta-estudiante.page.scss'],
})
export class RecuperarCuentaEstudiantePage implements OnInit {
  @ViewChild('inputCorreo') inputUsuario!: ElementRef;
  formularioRecuperarCuenta: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formularioRecuperarCuenta = this.fb.group({
      correo: ['', [Validators.required, Validators.email]] // Agregar validaciones
      
    });
  }

  ngOnInit() {
  }
}
