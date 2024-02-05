import { Module } from '@nestjs/common';
import { CostumetransactionService } from './costumetransaction.service';
import { CostumetransactionController } from './costumetransaction.controller';

@Module({
  controllers: [CostumetransactionController],
  providers: [CostumetransactionService],
})
export class CostumetransactionModule {}
