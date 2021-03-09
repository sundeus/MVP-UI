import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractFormContractTemplateComponent } from './contract-form-contract-template.component';

describe('ContractFormContractTemplateComponent', () => {
  let component: ContractFormContractTemplateComponent;
  let fixture: ComponentFixture<ContractFormContractTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractFormContractTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractFormContractTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
