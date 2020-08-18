import { TestBed } from '@angular/core/testing';

import { GateWayService } from './gate-way.service';

describe('GateWayService', () => {
  let service: GateWayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GateWayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
