import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderandTrackingService } from './orderand-tracking.service';
import { CreateOrderandTrackingDto } from './dto/create-orderand-tracking.dto';
import { UpdateOrderandTrackingDto } from './dto/update-orderand-tracking.dto';

@Controller('orderand-tracking')
export class OrderandTrackingController {
  constructor(private readonly orderandTrackingService: OrderandTrackingService) {}

  @Post()
  create(@Body() createOrderandTrackingDto: CreateOrderandTrackingDto) {
    return this.orderandTrackingService.create(createOrderandTrackingDto);
  }

  @Get()
  findAll() {
    return this.orderandTrackingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderandTrackingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderandTrackingDto: UpdateOrderandTrackingDto) {
    return this.orderandTrackingService.update(+id, updateOrderandTrackingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderandTrackingService.remove(+id);
  }
}
