import { TestBed } from '@angular/core/testing';

import { PushnotificationsService } from './pushnotifications.service';

describe('PushnotificationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PushnotificationsService = TestBed.get(PushnotificationsService);
    expect(service).toBeTruthy();
  });
});
