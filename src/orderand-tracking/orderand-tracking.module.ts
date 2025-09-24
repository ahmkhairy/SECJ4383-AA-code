import { Module } from '@nestjs/common';
import { OrderandTrackingService } from './orderand-tracking.service';
import { OrderandTrackingController } from './orderand-tracking.controller';

@Module({
  controllers: [OrderandTrackingController],
  providers: [OrderandTrackingService],
})
export class OrderandTrackingModule {}
