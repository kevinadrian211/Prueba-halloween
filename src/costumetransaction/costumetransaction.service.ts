import { Injectable } from '@nestjs/common';
import { CreateCostumetransactionDto } from './dto/create-costumetransaction.dto';
import { UpdateCostumetransactionDto } from './dto/update-costumetransaction.dto';

@Injectable()
export class CostumetransactionService {
  create(createCostumetransactionDto: CreateCostumetransactionDto) {
    return 'This action adds a new costumetransaction';
  }

  findAll() {
    return `This action returns all costumetransaction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} costumetransaction`;
  }

  update(id: number, updateCostumetransactionDto: UpdateCostumetransactionDto) {
    return `This action updates a #${id} costumetransaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} costumetransaction`;
  }
}
