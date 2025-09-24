import { Injectable } from '@nestjs/common';
import { CreateOrderandTrackingDto } from './dto/create-orderand-tracking.dto';
import { UpdateOrderandTrackingDto } from './dto/update-orderand-tracking.dto';

@Injectable()
export class OrderandTrackingService {
  create(createOrderandTrackingDto: CreateOrderandTrackingDto) {
    return 'This action adds a new orderandTracking';
  }

  findAll() {
    return `This action returns all orderandTracking`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderandTracking`;
  }

  update(id: number, updateOrderandTrackingDto: UpdateOrderandTrackingDto) {
    return `This action updates a #${id} orderandTracking`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderandTracking`;
  }
}
