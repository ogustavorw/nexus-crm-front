import { TestBed } from '@angular/core/testing';

import { LeadService } from './leads.service';

describe('Leads', () => {
  let service: LeadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
