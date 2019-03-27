import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantMissionCreateComponent } from './consultant-mission-create.component';

describe('ConsultantMissionCreateComponent', () => {
  let component: ConsultantMissionCreateComponent;
  let fixture: ComponentFixture<ConsultantMissionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultantMissionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantMissionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
