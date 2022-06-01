import { TestBed } from '@angular/core/testing';

import { EditorialServicesService } from './editorial-services.service';

describe('EditorialServicesService', () => {
  let service: EditorialServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditorialServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
