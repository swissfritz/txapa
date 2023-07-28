import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FalschPage } from './falsch.page';

describe('FalschPage', () => {
  let component: FalschPage;
  let fixture: ComponentFixture<FalschPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FalschPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
