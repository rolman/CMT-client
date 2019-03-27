import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantAddComponent } from './consultant-add.component';

describe('ConsultantAddComponent', () => {
  let component: ConsultantAddComponent;
  let fixture: ComponentFixture<ConsultantAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultantAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
