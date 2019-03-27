import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessUnitDeleteComponent } from './business-unit-delete.component';

describe('BusinessUnitDeleteComponent', () => {
  let component: BusinessUnitDeleteComponent;
  let fixture: ComponentFixture<BusinessUnitDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessUnitDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessUnitDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
