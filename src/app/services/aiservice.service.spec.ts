import { TestBed } from '@angular/core/testing';

import { AIserviceService } from './aiservice.service';

describe('AIserviceService', () => {
  let service: AIserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AIserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
