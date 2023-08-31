import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginStudentPage } from './login-student.page';

describe('LoginStudentPage', () => {
  let component: LoginStudentPage;
  let fixture: ComponentFixture<LoginStudentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
