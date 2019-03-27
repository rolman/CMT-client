import { TestBed, inject } from '@angular/core/testing';

import { MissionsAndStatsService } from './missions-and-stats.service';

describe('MissionsAndStatsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MissionsAndStatsService]
    });
  });

  it('should be created', inject([MissionsAndStatsService], (service: MissionsAndStatsService) => {
    expect(service).toBeTruthy();
  }));
});
