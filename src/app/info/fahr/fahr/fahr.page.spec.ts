import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FahrPage } from './fahr.page';

describe('FahrPage', () => {
  let component: FahrPage;
  let fixture: ComponentFixture<FahrPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FahrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
