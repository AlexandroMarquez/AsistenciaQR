import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainStudentPage } from './main-student.page';

describe('MainStudentPage', () => {
  let component: MainStudentPage;
  let fixture: ComponentFixture<MainStudentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MainStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
