import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantMissionsAndStatsComponent } from './consultant-missions-and-stats.component';

describe('ConsultantMissionsAndStatsComponent', () => {
  let component: ConsultantMissionsAndStatsComponent;
  let fixture: ComponentFixture<ConsultantMissionsAndStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultantMissionsAndStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantMissionsAndStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
