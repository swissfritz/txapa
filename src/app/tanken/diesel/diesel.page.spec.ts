import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DieselPage } from './diesel.page';

describe('DieselPage', () => {
  let component: DieselPage;
  let fixture: ComponentFixture<DieselPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DieselPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
