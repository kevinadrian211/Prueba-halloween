import { Test, TestingModule } from '@nestjs/testing';
import { TerrorhouseService } from './terrorhouse.service';

describe('TerrorhouseService', () => {
  let service: TerrorhouseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TerrorhouseService],
    }).compile();

    service = module.get<TerrorhouseService>(TerrorhouseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
