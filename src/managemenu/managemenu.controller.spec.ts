import { Test, TestingModule } from '@nestjs/testing';
import { ManagemenuController } from './managemenu.controller';
import { ManagemenuService } from './managemenu.service';

describe('ManagemenuController', () => {
  let controller: ManagemenuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManagemenuController],
      providers: [ManagemenuService],
    }).compile();

    controller = module.get<ManagemenuController>(ManagemenuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
