import { Injectable } from '@nestjs/common';
import { CreateTerrorhouseDto } from './dto/create-terrorhouse.dto';
import { UpdateTerrorhouseDto } from './dto/update-terrorhouse.dto';

@Injectable()
export class TerrorhouseService {
  create(createTerrorhouseDto: CreateTerrorhouseDto) {
    return 'This action adds a new terrorhouse';
  }

  findAll() {
    return `This action returns all terrorhouse`;
  }

  findOne(id: number) {
    return `This action returns a #${id} terrorhouse`;
  }

  update(id: number, updateTerrorhouseDto: UpdateTerrorhouseDto) {
    return `This action updates a #${id} terrorhouse`;
  }

  remove(id: number) {
    return `This action removes a #${id} terrorhouse`;
  }
}
