import { Test, TestingModule } from '@nestjs/testing';
import { SearchCarsController } from './search-cars.controller';

describe('SearchCarsController', () => {
  let controller: SearchCarsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchCarsController],
    }).compile();

    controller = module.get<SearchCarsController>(SearchCarsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
