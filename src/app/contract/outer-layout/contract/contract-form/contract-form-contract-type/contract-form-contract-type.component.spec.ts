import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractFormContractTypeComponent } from './contract-form-contract-type.component';

describe('ContractFormContractTypeComponent', () => {
  let component: ContractFormContractTypeComponent;
  let fixture: ComponentFixture<ContractFormContractTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractFormContractTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractFormContractTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
