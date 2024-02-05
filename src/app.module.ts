import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CostumesModule } from './costumes/costumes.module';
import { AttendeesModule } from './attendees/attendees.module';
import { PartiesModule } from './parties/parties.module';
import { BudgetModule } from './budget/budget.module';
import { ActivityModule } from './activity/activity.module';
import { PartyconfigurationModule } from './partyconfiguration/partyconfiguration.module';
import { CostumetransactionModule } from './costumetransaction/costumetransaction.module';
import { TerrorhouseModule } from './terrorhouse/terrorhouse.module';

@Module({
  imports: [PrismaModule, CostumesModule, AttendeesModule, PartiesModule, BudgetModule, ActivityModule, PartyconfigurationModule, CostumetransactionModule, TerrorhouseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
