import { Test, TestingModule } from '@nestjs/testing';
import { CalculatePriceService } from './calculate-price.service';

describe('CalculatePriceService', () => {
  let service: CalculatePriceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalculatePriceService],
    }).compile();

    service = module.get<CalculatePriceService>(CalculatePriceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
