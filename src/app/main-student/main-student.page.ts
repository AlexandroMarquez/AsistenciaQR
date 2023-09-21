import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-student',
  templateUrl: './main-student.page.html',
  styleUrls: ['./main-student.page.scss'],
})
export class MainStudentPage implements OnInit {
  estudiante: any; 

  constructor() { }

  ngOnInit() {
    const estudianteString = localStorage.getItem('estudiante');

    if (estudianteString) {
      this.estudiante = JSON.parse(estudianteString);
    }
  }
}
