import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomerePage } from './homere.page';

describe('HomerePage', () => {
  let component: HomerePage;
  let fixture: ComponentFixture<HomerePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomerePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
