import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InstructionSetPage } from './instruction-set.page';

describe('InstructionSetPage', () => {
  let component: InstructionSetPage;
  let fixture: ComponentFixture<InstructionSetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionSetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
