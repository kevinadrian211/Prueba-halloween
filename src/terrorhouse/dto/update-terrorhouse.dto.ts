import { PartialType } from '@nestjs/swagger';
import { CreateTerrorhouseDto } from './create-terrorhouse.dto';

export class UpdateTerrorhouseDto extends PartialType(CreateTerrorhouseDto) {}
