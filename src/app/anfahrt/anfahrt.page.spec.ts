import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnfahrtPage } from './anfahrt.page';

describe('AnfahrtPage', () => {
  let component: AnfahrtPage;
  let fixture: ComponentFixture<AnfahrtPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AnfahrtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
