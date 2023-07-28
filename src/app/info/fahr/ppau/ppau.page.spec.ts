import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { PpauPage } from './ppau.page';

describe('PpauPage', () => {
  let component: PpauPage;
  let fixture: ComponentFixture<PpauPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PpauPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
