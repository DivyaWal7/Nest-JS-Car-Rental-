import { Controller,Get, Param } from '@nestjs/common';
import {CalculatePriceService} from './calculate-price.service';
@Controller('calculate-price')
export class CalculatePriceController {

    

    constructor(private calculatePrice: CalculatePriceService){}


    // end point methods  
    /* how data to be sent over the network  dto files define

    */

    @Get(':toDateTime/:fromDateTime/:cardId')
    public  getPrice(@Param('toDateTime') toDateTime:Date,@Param('fromDateTime') fromDateTime:Date,@Param('cardId') cardId:string){
        return this.calculatePrice.getPrice(toDateTime,fromDateTime,cardId);
    }

}

