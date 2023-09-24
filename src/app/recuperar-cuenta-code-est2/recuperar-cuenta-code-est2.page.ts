import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-cuenta-code-est2',
  templateUrl: './recuperar-cuenta-code-est2.page.html',
  styleUrls: ['./recuperar-cuenta-code-est2.page.scss'],
})
export class RecuperarCuentaCodeEst2Page implements OnInit {
  formularioNewPass: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.formularioNewPass = this.formBuilder.group({
      newpassword: ['', Validators.required],
    });
  }

  ngOnInit() {}

  cambiarPass() {
    const newpassword = this.formularioNewPass.get('newpassword')?.value;
  
    const estudianteEnLocalStorageString = localStorage.getItem('estudiante');
  
    if (estudianteEnLocalStorageString) {
      const estudianteEnLocalStorage = JSON.parse(estudianteEnLocalStorageString);
  
      estudianteEnLocalStorage.contraseña = newpassword;
  
      localStorage.setItem('estudiante', JSON.stringify(estudianteEnLocalStorage));
  
      this.router.navigate(['/home']);
    } else {
      console.log('No se encontró un objeto de estudiante en el localStorage');
    }
  }
  
}
