import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ManagemenuService } from './managemenu.service';
import { CreateManagemenuDto } from './dto/create-managemenu.dto';
import { UpdateManagemenuDto } from './dto/update-managemenu.dto';

@Controller('managemenu')
export class ManagemenuController {
  constructor(private readonly managemenuService: ManagemenuService) {}

  @Post()
  create(@Body() createManagemenuDto: CreateManagemenuDto) {
    return this.managemenuService.create(createManagemenuDto);
  }

  @Get()
  findAll() {
    return this.managemenuService.findAll();
  }
@Get('dishes')
  findAlldishes() {
    return this.managemenuService.findAlldishes();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.managemenuService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateManagemenuDto: UpdateManagemenuDto) {
    return this.managemenuService.update(+id, updateManagemenuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.managemenuService.remove(+id);
  }

  @Get('track-order/:orderId')
  trackOrder(@Param('orderId') orderId: string) {
    return this.managemenuService.trackOrder(+orderId);
  }

  @Post('dish')
  createDish(@Body() createDishDto: any) {
    return this.managemenuService.createDish(createDishDto);
  }
}
