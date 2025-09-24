import { PartialType } from '@nestjs/mapped-types';
import { CreateManagemenuDto } from './create-managemenu.dto';

export class UpdateManagemenuDto extends PartialType(CreateManagemenuDto) {}
