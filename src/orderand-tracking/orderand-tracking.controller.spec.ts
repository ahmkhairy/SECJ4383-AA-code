import { Test, TestingModule } from '@nestjs/testing';
import { OrderandTrackingController } from './orderand-tracking.controller';
import { OrderandTrackingService } from './orderand-tracking.service';

describe('OrderandTrackingController', () => {
  let controller: OrderandTrackingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderandTrackingController],
      providers: [OrderandTrackingService],
    }).compile();

    controller = module.get<OrderandTrackingController>(OrderandTrackingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
