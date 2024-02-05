import { Test, TestingModule } from '@nestjs/testing';
import { TerrorhouseController } from './terrorhouse.controller';
import { TerrorhouseService } from './terrorhouse.service';

describe('TerrorhouseController', () => {
  let controller: TerrorhouseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TerrorhouseController],
      providers: [TerrorhouseService],
    }).compile();

    controller = module.get<TerrorhouseController>(TerrorhouseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
