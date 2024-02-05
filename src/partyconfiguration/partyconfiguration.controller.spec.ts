import { Test, TestingModule } from '@nestjs/testing';
import { PartyconfigurationController } from './partyconfiguration.controller';
import { PartyconfigurationService } from './partyconfiguration.service';

describe('PartyconfigurationController', () => {
  let controller: PartyconfigurationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PartyconfigurationController],
      providers: [PartyconfigurationService],
    }).compile();

    controller = module.get<PartyconfigurationController>(PartyconfigurationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
