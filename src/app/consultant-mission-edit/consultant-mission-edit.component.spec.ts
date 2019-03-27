import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantMissionEditComponent } from './consultant-mission-edit.component';

describe('ConsultantMissionEditComponent', () => {
  let component: ConsultantMissionEditComponent;
  let fixture: ComponentFixture<ConsultantMissionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultantMissionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantMissionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
