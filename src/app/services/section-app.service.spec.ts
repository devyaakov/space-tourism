import { TestBed } from '@angular/core/testing';

import { SectionAppService } from './section-app.service';

describe('SectionAppService', () => {
  let service: SectionAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
