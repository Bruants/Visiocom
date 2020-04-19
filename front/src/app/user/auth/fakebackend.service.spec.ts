import { TestBed } from '@angular/core/testing';
import { FakeBackendInterceptor } from './fakebackend.service';

describe('FakebackendService', () => {
  let service: FakeBackendInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeBackendInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
