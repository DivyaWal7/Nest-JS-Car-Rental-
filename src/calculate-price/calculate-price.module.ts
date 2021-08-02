import { Module } from '@nestjs/common';
import { CalculatePriceController } from './calculate-price.controller';
import { CalculatePriceService } from './calculate-price.service';

@Module({
  controllers: [CalculatePriceController],
  providers: [CalculatePriceService]
})
export class CalculatePriceModule {

  
}
