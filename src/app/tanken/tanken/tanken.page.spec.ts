import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TankenPage } from './tanken.page';

describe('TankenPage', () => {
  let component: TankenPage;
  let fixture: ComponentFixture<TankenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TankenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
