import { Module } from '@nestjs/common';
import { SearchCarsController } from './search-cars.controller';
import { SearchCarsService } from './search-cars.service';

@Module({
  controllers: [SearchCarsController],
  providers: [SearchCarsService]
})
export class SearchCarsModule {}
