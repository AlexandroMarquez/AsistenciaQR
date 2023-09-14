import { Component, OnInit } from '@angular/core';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';


@Component({
  selector: 'app-recuperar-cuenta-profesor',
  templateUrl: './recuperar-cuenta-profesor.page.html',
  styleUrls: ['./recuperar-cuenta-profesor.page.scss'],
})
export class RecuperarCuentaProfesorPage implements OnInit {

  formularioRecuperar_cuenta_profesor: FormGroup; // Confirmar si sirve

  constructor(public fb: FormBuilder) {

    this.formularioRecuperar_cuenta_profesor = this.fb.group({
      'correo': new FormControl("",Validators.required),
    })

   }

  ngOnInit() {
  }

}
