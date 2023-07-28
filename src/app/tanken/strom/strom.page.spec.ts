import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StromPage } from './strom.page';

describe('StromPage', () => {
  let component: StromPage;
  let fixture: ComponentFixture<StromPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StromPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
