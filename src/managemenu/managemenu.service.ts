import { Injectable } from '@nestjs/common';
import { CreateManagemenuDto } from './dto/create-managemenu.dto';
import { UpdateManagemenuDto } from './dto/update-managemenu.dto';

@Injectable()
export class ManagemenuService {
  create(createManagemenuDto: CreateManagemenuDto) {
    return 'This action adds a new managemenu';
  }

  findAll() {
    return `This action returns all managemenu`;
  }

  findOne(id: number) {
    return `This action returns a #${id} managemenu`;
  }

  update(id: number, updateManagemenuDto: UpdateManagemenuDto) {
    return `This action updates a #${id} managemenu`;
  }

  remove(id: number) {
    return `This action removes a #${id} managemenu`;
  }
}
