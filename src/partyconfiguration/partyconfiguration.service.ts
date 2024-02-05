import { Injectable } from '@nestjs/common';
import { CreatePartyconfigurationDto } from './dto/create-partyconfiguration.dto';
import { UpdatePartyconfigurationDto } from './dto/update-partyconfiguration.dto';

@Injectable()
export class PartyconfigurationService {
  create(createPartyconfigurationDto: CreatePartyconfigurationDto) {
    return 'This action adds a new partyconfiguration';
  }

  findAll() {
    return `This action returns all partyconfiguration`;
  }

  findOne(id: number) {
    return `This action returns a #${id} partyconfiguration`;
  }

  update(id: number, updatePartyconfigurationDto: UpdatePartyconfigurationDto) {
    return `This action updates a #${id} partyconfiguration`;
  }

  remove(id: number) {
    return `This action removes a #${id} partyconfiguration`;
  }
}
