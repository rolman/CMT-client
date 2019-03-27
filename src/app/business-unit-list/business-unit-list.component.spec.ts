import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessUnitListComponent } from './business-unit-list.component';

describe('BusinessUnitListComponent', () => {
  let component: BusinessUnitListComponent;
  let fixture: ComponentFixture<BusinessUnitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessUnitListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessUnitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
