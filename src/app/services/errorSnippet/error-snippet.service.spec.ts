import { TestBed } from '@angular/core/testing';

import { ErrorSnippetService } from './error-snippet.service';

describe('ErrorSnippetService', () => {
  let service: ErrorSnippetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorSnippetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
