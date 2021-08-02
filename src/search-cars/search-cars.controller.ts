import { Controller,Get, Post,Delete,Put,Body, Param,Query } from '@nestjs/common';
import {SearchCarsService} from './search-cars.service';

@Controller('search-cars')
export class SearchCarsController {

    

    constructor(private searchService: SearchCarsService){}


    // end point methods  
    /* how data to be sent over the network  dto files define

    */
   @Get()
    public getCars(){
        return this.searchService.getCars();;
    }


    @Get(':toDateTime/:fromDateTime')
    public  getCarbyId(@Param('toDateTime') toDateTime:Date,@Param('fromDateTime') fromDateTime:Date){
        return this.searchService.getCarbyId(toDateTime,fromDateTime);
    }




}

