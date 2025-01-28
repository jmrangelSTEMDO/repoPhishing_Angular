import { TestBed } from '@angular/core/testing';

import { GAnalyticsService } from './g-analytics.service';

describe('GAnalyticsService', () => {
  let service: GAnalyticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GAnalyticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
