import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { PauschPage } from './pausch.page';

describe('PauschPage', () => {
  let component: PauschPage;
  let fixture: ComponentFixture<PauschPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PauschPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
