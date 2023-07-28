import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuchenPage } from './buchen.page';

describe('BuchenPage', () => {
  let component: BuchenPage;
  let fixture: ComponentFixture<BuchenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BuchenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
