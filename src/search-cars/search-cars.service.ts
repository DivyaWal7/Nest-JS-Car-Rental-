import { Injectable ,HttpException} from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {ICar} from '../car/interfaces/car.interface'


@Injectable()
export class SearchCarsService {

// import {CARS} from './car.mock';
    
    // private cars=CARS; //mock data test

    constructor(@InjectModel('Car') private readonly carModel: Model<ICar>) {}


    /* return all free cars */

    public getCars(){ 
            const cars=this.carModel.find({ "status":'free'}).exec();
            return cars;
    }

   
    public  async getCarbyId(toDateTime:Date,fromDateTime:Date):Promise<any>{;
      const freecars=this.carModel.find({
        "status":'free',
        "dateTimeFrom" : { 
            "$gte" :fromDateTime,
        },
        "dateTimeTo" : { 
            "$lte" :toDateTime ,
        }
    }).exec();
       if(!freecars){
          throw new HttpException('Not found',404);
       }
       else
       return freecars;
    }

  
}
