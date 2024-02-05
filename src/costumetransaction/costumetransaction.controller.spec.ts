import { Test, TestingModule } from '@nestjs/testing';
import { CostumetransactionController } from './costumetransaction.controller';
import { CostumetransactionService } from './costumetransaction.service';

describe('CostumetransactionController', () => {
  let controller: CostumetransactionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CostumetransactionController],
      providers: [CostumetransactionService],
    }).compile();

    controller = module.get<CostumetransactionController>(CostumetransactionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
