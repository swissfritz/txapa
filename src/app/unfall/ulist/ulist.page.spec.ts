import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UlistPage } from './ulist.page';

describe('UlistPage', () => {
  let component: UlistPage;
  let fixture: ComponentFixture<UlistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
