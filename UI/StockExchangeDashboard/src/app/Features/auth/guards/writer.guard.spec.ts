import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { writerGuard } from './writer.guard';

describe('writerGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => writerGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
