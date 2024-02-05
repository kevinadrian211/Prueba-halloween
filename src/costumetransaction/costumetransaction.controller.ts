import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CostumetransactionService } from './costumetransaction.service';
import { CreateCostumetransactionDto } from './dto/create-costumetransaction.dto';
import { UpdateCostumetransactionDto } from './dto/update-costumetransaction.dto';

@Controller('costumetransaction')
export class CostumetransactionController {
  constructor(private readonly costumetransactionService: CostumetransactionService) {}

  @Post()
  create(@Body() createCostumetransactionDto: CreateCostumetransactionDto) {
    return this.costumetransactionService.create(createCostumetransactionDto);
  }

  @Get()
  findAll() {
    return this.costumetransactionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.costumetransactionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCostumetransactionDto: UpdateCostumetransactionDto) {
    return this.costumetransactionService.update(+id, updateCostumetransactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.costumetransactionService.remove(+id);
  }
}
