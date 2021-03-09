import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractFormValidateComponent } from './contract-form-validate.component';

describe('ContractFormValidateComponent', () => {
  let component: ContractFormValidateComponent;
  let fixture: ComponentFixture<ContractFormValidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractFormValidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractFormValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
