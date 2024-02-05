import { Test, TestingModule } from '@nestjs/testing';
import { PartyconfigurationService } from './partyconfiguration.service';

describe('PartyconfigurationService', () => {
  let service: PartyconfigurationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PartyconfigurationService],
    }).compile();

    service = module.get<PartyconfigurationService>(PartyconfigurationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
