import { Test, TestingModule } from '@nestjs/testing';
import { CalculatePriceController } from './calculate-price.controller';

describe('CalculatePriceController', () => {
  let controller: CalculatePriceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalculatePriceController],
    }).compile();

    controller = module.get<CalculatePriceController>(CalculatePriceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
