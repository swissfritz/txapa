import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KontrollePage } from './kontrolle.page';

describe('KontrollePage', () => {
  let component: KontrollePage;
  let fixture: ComponentFixture<KontrollePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KontrollePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
