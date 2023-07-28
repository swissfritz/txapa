import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdbluePage } from './adblue.page';

describe('AdbluePage', () => {
  let component: AdbluePage;
  let fixture: ComponentFixture<AdbluePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdbluePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
