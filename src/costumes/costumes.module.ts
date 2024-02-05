import { Module } from '@nestjs/common';
import { CostumeService } from './costumes.service';
import { CostumeController } from './costumes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
@Module({
  controllers: [CostumeController],
  providers: [CostumeService],
  imports: [PrismaModule],
})
export class CostumesModule {}
