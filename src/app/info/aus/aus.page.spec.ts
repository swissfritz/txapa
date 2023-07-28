import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AusPage } from './aus.page';

describe('AusPage', () => {
  let component: AusPage;
  let fixture: ComponentFixture<AusPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
