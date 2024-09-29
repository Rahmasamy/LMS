import { TestBed } from '@angular/core/testing';

import { InstructorSerService } from './instructor-ser.service';

describe('InstructorSerService', () => {
  let service: InstructorSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstructorSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
