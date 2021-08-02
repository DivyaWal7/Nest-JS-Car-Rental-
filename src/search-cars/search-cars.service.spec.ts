import { Test, TestingModule } from '@nestjs/testing';
import { SearchCarsService } from './search-cars.service';

describe('SearchCarsService', () => {
  let service: SearchCarsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SearchCarsService],
    }).compile();

    service = module.get<SearchCarsService>(SearchCarsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
