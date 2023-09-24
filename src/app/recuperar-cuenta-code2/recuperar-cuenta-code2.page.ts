import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-cuenta-code2',
  templateUrl: './recuperar-cuenta-code2.page.html',
  styleUrls: ['./recuperar-cuenta-code2.page.scss'],
})
export class RecuperarCuentaCode2Page implements OnInit {
  formularioNewPass: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.formularioNewPass = this.formBuilder.group({
      newpassword: ['', Validators.required],
    });
  }

  ngOnInit() {}

  cambiarPass() {
    // Obtén la nueva contraseña desde el formulario
    const newpassword = this.formularioNewPass.get('newpassword')?.value;
  
    // Obtiene el objeto 'profesor' del Local Storage
    const profesorEnLocalStorageString = localStorage.getItem('profesor');
  
    if (profesorEnLocalStorageString) {
      // Si 'profesorEnLocalStorageString' no es nulo, convierte la cadena JSON en un objeto
      const profesorEnLocalStorage = JSON.parse(profesorEnLocalStorageString);
  
      // Actualiza la contraseña en el objeto 'profesor'
      profesorEnLocalStorage.contraseña = newpassword;
  
      // Vuelve a almacenar el objeto actualizado en el localStorage
      localStorage.setItem('profesor', JSON.stringify(profesorEnLocalStorage));
  
      // Redirige a la página de inicio u otra página según tus necesidades
      this.router.navigate(['/home']);
    } else {
      console.log('No se encontró un objeto de profesor en el localStorage');
    }
  }
  
}
