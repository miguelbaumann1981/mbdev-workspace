import { TestBed } from '@angular/core/testing';

import { MbdevSideMenuService } from './mbdev-side-menu.service';

describe('MbdevSideMenuService', () => {
  let service: MbdevSideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MbdevSideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
