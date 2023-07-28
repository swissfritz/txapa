import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AusttPage } from './austt.page';

describe('AusttPage', () => {
  let component: AusttPage;
  let fixture: ComponentFixture<AusttPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AusttPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
