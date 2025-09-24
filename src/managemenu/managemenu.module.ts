import { Module } from '@nestjs/common';
import { ManagemenuService } from './managemenu.service';
import { ManagemenuController } from './managemenu.controller';

@Module({
  controllers: [ManagemenuController],
  providers: [ManagemenuService],
})
export class ManagemenuModule {}
