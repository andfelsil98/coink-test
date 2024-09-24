import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmNumberPage } from './confirm-number.page';

describe('ConfirmNumberPage', () => {
  let component: ConfirmNumberPage;
  let fixture: ComponentFixture<ConfirmNumberPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmNumberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
