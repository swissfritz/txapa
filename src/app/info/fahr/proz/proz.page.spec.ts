import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ProzPage } from './proz.page';

describe('ProzPage', () => {
  let component: ProzPage;
  let fixture: ComponentFixture<ProzPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProzPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
