import { TestBed, inject } from '@angular/core/testing';

import { NgxHighlightJsService } from './ngx-highlight-js.service';

describe('NgxHighlightJsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxHighlightJsService]
    });
  });

  it('should be created', inject([NgxHighlightJsService], (service: NgxHighlightJsService) => {
    expect(service).toBeTruthy();
  }));
});
