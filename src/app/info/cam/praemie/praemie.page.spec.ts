import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PraemiePage } from './praemie.page';

describe('PraemiePage', () => {
  let component: PraemiePage;
  let fixture: ComponentFixture<PraemiePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PraemiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
