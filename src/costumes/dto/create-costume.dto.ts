import { ApiProperty } from '@nestjs/swagger';

export class CreateCostumeDto {
  @ApiProperty({ example: 'Vampire Costume' })
  name: string;

  @ApiProperty({ example: 'A costume that makes you look like a vampire.' })
  description?: string;

  @ApiProperty({ example: ['Garlic'] })
  weakness: string[];

  @ApiProperty({ example: ['Flying', 'Biting'] })
  skills: string[];

  @ApiProperty({ example: 300 })
  price: number;

  @ApiProperty({ example: true })
  stock?: boolean;
}
