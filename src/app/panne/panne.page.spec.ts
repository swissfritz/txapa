import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PannePage } from './panne.page';

describe('PannePage', () => {
  let component: PannePage;
  let fixture: ComponentFixture<PannePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PannePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
