import { Controller,Get, Post,Delete,Put,Body, Param,Query } from '@nestjs/common';
import {CarService} from './car.service';
import {UserService} from '../user/user.service';
import {CarDto} from './car.dto';   

@Controller('cars') // base url after localHost
export class CarController {
    constructor(
        private userService: UserService,
        private carService: CarService,
        ){}
    // end point methods  
    /* how data to be sent over the network  dto files define

    */
   /*
   Implemented CRUD operations 

   */

   @Get()
    public getCars(){
        return this.carService.getCars();;
    }

    @Post()
    public  postCars(@Body() car:CarDto){
        return this.carService.postCars(car);
    }

    @Delete(':carLicenseNumber')
    public  deleteCars(@Param('carLicenseNumber') carLicenseNumber:string){
        return  this.carService.deleteCars(carLicenseNumber);;
    }

    @Get(':carLicenseNumber')
    public  getCarbyId(@Param('carLicenseNumber') carLicenseNumber:string){
        return this.carService.getCarbyId(carLicenseNumber);
    }

    @Put(':carLicenseNumber')
    public  updateCarById(@Param('carLicenseNumber') carLicenseNumber:string,@Query() query){
        const property_name=query.property_name;
        const property_value=query.property_value;
        return this.carService.updateCarById(carLicenseNumber,property_name,property_value);
    }

    @Put('car/book/:carLicenseNumber')
    public  bookCar(@Param('carLicenseNumber') carLicenseNumber:string,@Query() query){
        const property_name=query.property_name;
        const property_value=query.property_value;
        return this.carService.updateCarById(carLicenseNumber,property_name,property_value);
    }

    @Get('/car/bookings')
    public  getListofUsers(@Param('carLicenseNumber') carLicenseNumber:string){
        return this.userService.getListofUsers(carLicenseNumber);
    }


}
