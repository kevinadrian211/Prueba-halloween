import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PartyconfigurationService } from './partyconfiguration.service';
import { CreatePartyconfigurationDto } from './dto/create-partyconfiguration.dto';
import { UpdatePartyconfigurationDto } from './dto/update-partyconfiguration.dto';

@Controller('partyconfiguration')
export class PartyconfigurationController {
  constructor(private readonly partyconfigurationService: PartyconfigurationService) {}

  @Post()
  create(@Body() createPartyconfigurationDto: CreatePartyconfigurationDto) {
    return this.partyconfigurationService.create(createPartyconfigurationDto);
  }

  @Get()
  findAll() {
    return this.partyconfigurationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.partyconfigurationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePartyconfigurationDto: UpdatePartyconfigurationDto) {
    return this.partyconfigurationService.update(+id, updatePartyconfigurationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.partyconfigurationService.remove(+id);
  }
}
