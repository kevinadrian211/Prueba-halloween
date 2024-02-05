import { PartialType } from '@nestjs/swagger';
import { CreatePartyconfigurationDto } from './create-partyconfiguration.dto';

export class UpdatePartyconfigurationDto extends PartialType(CreatePartyconfigurationDto) {}
