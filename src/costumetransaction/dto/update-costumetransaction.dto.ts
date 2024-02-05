import { PartialType } from '@nestjs/swagger';
import { CreateCostumetransactionDto } from './create-costumetransaction.dto';

export class UpdateCostumetransactionDto extends PartialType(CreateCostumetransactionDto) {}
