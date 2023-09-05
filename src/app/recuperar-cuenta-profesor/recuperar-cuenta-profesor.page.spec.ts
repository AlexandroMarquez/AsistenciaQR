import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperarCuentaProfesorPage } from './recuperar-cuenta-profesor.page';

describe('RecuperarCuentaProfesorPage', () => {
  let component: RecuperarCuentaProfesorPage;
  let fixture: ComponentFixture<RecuperarCuentaProfesorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecuperarCuentaProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
