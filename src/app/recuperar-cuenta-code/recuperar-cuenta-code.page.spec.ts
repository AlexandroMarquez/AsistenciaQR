import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperarCuentaCodePage } from './recuperar-cuenta-code.page';

describe('RecuperarCuentaCodePage', () => {
  let component: RecuperarCuentaCodePage;
  let fixture: ComponentFixture<RecuperarCuentaCodePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecuperarCuentaCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
