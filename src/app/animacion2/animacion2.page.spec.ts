import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Animacion2Page } from './animacion2.page';

describe('Animacion2Page', () => {
  let component: Animacion2Page;
  let fixture: ComponentFixture<Animacion2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Animacion2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
