import { Module } from '@nestjs/common';
import { CarModule } from './car/car.module';
import {MongooseModule} from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { SearchCarsModule } from './search-cars/search-cars.module';
import { CalculatePriceModule } from './calculate-price/calculate-price.module';

// contain implementation of application  :Car Rental Systems
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/car_manager'),
    CarModule,
    UserModule,
    SearchCarsModule,
    CalculatePriceModule
  ],
})
export class AppModule {}
