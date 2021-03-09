import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationdetailsFormComponent } from './organisationdetails-form.component';

describe('OrganisationdetailsFormComponent', () => {
  let component: OrganisationdetailsFormComponent;
  let fixture: ComponentFixture<OrganisationdetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisationdetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationdetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
