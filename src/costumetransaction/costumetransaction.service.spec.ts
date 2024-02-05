import { Test, TestingModule } from '@nestjs/testing';
import { CostumetransactionService } from './costumetransaction.service';

describe('CostumetransactionService', () => {
  let service: CostumetransactionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CostumetransactionService],
    }).compile();

    service = module.get<CostumetransactionService>(CostumetransactionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
