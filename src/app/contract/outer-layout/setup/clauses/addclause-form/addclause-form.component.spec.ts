import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddclauseFormComponent } from './addclause-form.component';

describe('AddclauseFormComponent', () => {
  let component: AddclauseFormComponent;
  let fixture: ComponentFixture<AddclauseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddclauseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddclauseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
