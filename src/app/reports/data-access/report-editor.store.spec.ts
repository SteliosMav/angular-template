import { TestBed } from '@angular/core/testing';

import { ReportEditorStore } from './report-editor.store';

describe('ReportEditorStore', () => {
  let service: ReportEditorStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportEditorStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
