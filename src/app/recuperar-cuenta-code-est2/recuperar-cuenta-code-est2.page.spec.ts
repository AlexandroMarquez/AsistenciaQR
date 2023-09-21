import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperarCuentaCodeEst2Page } from './recuperar-cuenta-code-est2.page';

describe('RecuperarCuentaCodeEst2Page', () => {
  let component: RecuperarCuentaCodeEst2Page;
  let fixture: ComponentFixture<RecuperarCuentaCodeEst2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecuperarCuentaCodeEst2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
