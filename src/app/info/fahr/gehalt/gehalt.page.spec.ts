import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { GehaltPage } from './gehalt.page';

describe('GehaltPage', () => {
  let component: GehaltPage;
  let fixture: ComponentFixture<GehaltPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GehaltPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
