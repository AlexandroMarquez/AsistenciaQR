import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperarCuentaCodeEstPage } from './recuperar-cuenta-code-est.page';

describe('RecuperarCuentaCodeEstPage', () => {
  let component: RecuperarCuentaCodeEstPage;
  let fixture: ComponentFixture<RecuperarCuentaCodeEstPage>;

  beforeEach(async () => { // Quitamos los paréntesis y las llaves extra
    fixture = TestBed.createComponent(RecuperarCuentaCodeEstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
