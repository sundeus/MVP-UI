import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateClauseComponent } from './validate-clause.component';

describe('ValidateClauseComponent', () => {
  let component: ValidateClauseComponent;
  let fixture: ComponentFixture<ValidateClauseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateClauseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateClauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
