import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RecuperarCuentaCodeEst2Page } from './recuperar-cuenta-code-est2.page';

describe('RecuperarCuentaCodeEst2Page', () => {
  let component: RecuperarCuentaCodeEst2Page;
  let fixture: ComponentFixture<RecuperarCuentaCodeEst2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecuperarCuentaCodeEst2Page],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(RecuperarCuentaCodeEst2Page);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
