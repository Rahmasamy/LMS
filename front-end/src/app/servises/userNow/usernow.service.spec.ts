import { TestBed } from '@angular/core/testing';

import { UsernowService } from './usernow.service';

describe('UsernowService', () => {
  let service: UsernowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsernowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
