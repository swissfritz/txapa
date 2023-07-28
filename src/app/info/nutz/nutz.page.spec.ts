import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NutzPage } from './nutz.page';

describe('NutzPage', () => {
  let component: NutzPage;
  let fixture: ComponentFixture<NutzPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NutzPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
