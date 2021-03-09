import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractFormEnterDataComponent } from './contract-form-enter-data.component';

describe('ContractFormEnterDataComponent', () => {
  let component: ContractFormEnterDataComponent;
  let fixture: ComponentFixture<ContractFormEnterDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractFormEnterDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractFormEnterDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
