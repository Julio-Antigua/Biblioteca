import { TestBed } from '@angular/core/testing';

import { LibrosServicesService } from './libros-services.service';

describe('LibrosServicesService', () => {
  let service: LibrosServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrosServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
