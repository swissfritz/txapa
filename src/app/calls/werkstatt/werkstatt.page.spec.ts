import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WerkstattPage } from './werkstatt.page';

describe('WerkstattPage', () => {
  let component: WerkstattPage;
  let fixture: ComponentFixture<WerkstattPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WerkstattPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
