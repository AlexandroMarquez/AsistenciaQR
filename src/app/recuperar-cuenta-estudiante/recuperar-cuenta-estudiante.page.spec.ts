import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperarCuentaEstudiantePage } from './recuperar-cuenta-estudiante.page';

describe('RecuperarCuentaEstudiantePage', () => {
  let component: RecuperarCuentaEstudiantePage;
  let fixture: ComponentFixture<RecuperarCuentaEstudiantePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecuperarCuentaEstudiantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
