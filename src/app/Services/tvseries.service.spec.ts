import { TestBed } from '@angular/core/testing';

import { TVSeriesService } from './tvseries.service';

describe('TVSeriesService', () => {
  let service: TVSeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TVSeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
