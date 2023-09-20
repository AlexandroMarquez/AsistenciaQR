import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-profesor',
  templateUrl: './main-profesor.page.html',
  styleUrls: ['./main-profesor.page.scss'],
})
export class MainProfesorPage implements OnInit {
  profesor: any; 

  constructor() { }

  ngOnInit() {
    const profesorString = localStorage.getItem('profesor');

    if (profesorString) {
      this.profesor = JSON.parse(profesorString);
    }
  }
}
