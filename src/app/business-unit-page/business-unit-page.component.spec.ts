import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessUnitPageComponent } from './business-unit-page.component';

describe('BusinessUnitPageComponent', () => {
  let component: BusinessUnitPageComponent;
  let fixture: ComponentFixture<BusinessUnitPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessUnitPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessUnitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
