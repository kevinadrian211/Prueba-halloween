import { Module } from '@nestjs/common';
import { PartyconfigurationService } from './partyconfiguration.service';
import { PartyconfigurationController } from './partyconfiguration.controller';

@Module({
  controllers: [PartyconfigurationController],
  providers: [PartyconfigurationService],
})
export class PartyconfigurationModule {}
