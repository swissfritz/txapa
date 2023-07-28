import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WerprPage } from './werpr.page';

describe('WerprPage', () => {
  let component: WerprPage;
  let fixture: ComponentFixture<WerprPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WerprPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
