// costumes.controller.ts

import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { CostumeService } from './costumes.service';
import { CreateCostumeDto } from './dto/create-costume.dto';

@Controller('costumes')
export class CostumeController {
  constructor(private readonly costumeService: CostumeService) {}

  @Get('attendees/:attendeeId/costumes')
  getAttendeeCostumes(@Param('attendeeId') attendeeId: string) {
    return this.costumeService.getAttendeeCostumes(+attendeeId);
  }

  @Get()
  getAllCostumes() {
    return this.costumeService.getAllCostumes();
  }

  @Post('attendees/purchase')
  purchaseCostumes(@Body() purchaseCostumesDto: any) {
    const { attendeeId, costumeId, amountPaid } = purchaseCostumesDto;
    return this.costumeService.purchaseCostumes(+attendeeId, +costumeId, +amountPaid);
  }

  @Post()
  createCostume(@Body() createCostumeDto: CreateCostumeDto) {
    return this.costumeService.createCostume(createCostumeDto);
  }

  @Patch('attendees/costumes')
  updateCostumeTransaction(@Body() updateCostumeTransactionDto: any) {
    const { transactionId, amountPaid } = updateCostumeTransactionDto;
    return this.costumeService.updateCostumeTransaction(+transactionId, +amountPaid);
  }

  @Delete('attendees/costumes/:transactionId')
  deleteCostumeTransaction(@Param('transactionId') transactionId: string) {
    return this.costumeService.deleteCostumeTransaction(+transactionId);
  }
}
