import { Test, TestingModule } from '@nestjs/testing';
import { OrderandTrackingService } from './orderand-tracking.service';

describe('OrderandTrackingService', () => {
  let service: OrderandTrackingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderandTrackingService],
    }).compile();

    service = module.get<OrderandTrackingService>(OrderandTrackingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
