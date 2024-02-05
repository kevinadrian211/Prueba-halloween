import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TerrorhouseService } from './terrorhouse.service';
import { CreateTerrorhouseDto } from './dto/create-terrorhouse.dto';
import { UpdateTerrorhouseDto } from './dto/update-terrorhouse.dto';

@Controller('terrorhouse')
export class TerrorhouseController {
  constructor(private readonly terrorhouseService: TerrorhouseService) {}

  @Post()
  create(@Body() createTerrorhouseDto: CreateTerrorhouseDto) {
    return this.terrorhouseService.create(createTerrorhouseDto);
  }

  @Get()
  findAll() {
    return this.terrorhouseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.terrorhouseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTerrorhouseDto: UpdateTerrorhouseDto) {
    return this.terrorhouseService.update(+id, updateTerrorhouseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.terrorhouseService.remove(+id);
  }
}
