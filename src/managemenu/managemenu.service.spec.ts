import { Test, TestingModule } from '@nestjs/testing';
import { ManagemenuService } from './managemenu.service';

describe('ManagemenuService', () => {
  let service: ManagemenuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManagemenuService],
    }).compile();

    service = module.get<ManagemenuService>(ManagemenuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
