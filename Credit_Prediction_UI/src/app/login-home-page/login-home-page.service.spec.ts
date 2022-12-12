import { TestBed } from '@angular/core/testing';

import { LoginHomePageService } from './login-home-page.service';

describe('LoginHomePageService', () => {
  let service: LoginHomePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginHomePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
