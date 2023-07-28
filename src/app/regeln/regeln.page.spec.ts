import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegelnPage } from './regeln.page';

describe('RegelnPage', () => {
  let component: RegelnPage;
  let fixture: ComponentFixture<RegelnPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegelnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
