import { Module } from '@nestjs/common';
import { TerrorhouseService } from './terrorhouse.service';
import { TerrorhouseController } from './terrorhouse.controller';

@Module({
  controllers: [TerrorhouseController],
  providers: [TerrorhouseService],
})
export class TerrorhouseModule {}
