import { TestBed } from '@angular/core/testing';

import { MiyabiServicesService } from './miyabi-services.service';

describe('MiyabiServicesService', () => {
  let service: MiyabiServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiyabiServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
