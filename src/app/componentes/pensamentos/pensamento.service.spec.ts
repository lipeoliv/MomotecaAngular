import { TestBed } from '@angular/core/testing';

import { PesamentoService } from './pensamento.service';

describe('PesamentoService', () => {
  let service: PesamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PesamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
