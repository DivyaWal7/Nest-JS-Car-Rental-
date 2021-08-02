import { Injectable ,HttpException} from '@nestjs/common';
// import {CARS} from './car.mock';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {ICar} from './interfaces/car.interface'
import {CarDto} from './car.dto'


@Injectable()
export class CarService {
    
    // private cars=CARS; //mock data test

    constructor(@InjectModel('Car') private readonly carModel: Model<ICar>) {}

    public getCars(){ 
            const cars=this.carModel.find().exec();
            return cars;
    }

    public async postCars(car){
        const cars= await new this.carModel(car);
        return cars.save();
    }


    public  async deleteCars(id:string):Promise<any>{
        const cardId=String(id);
        const car = await this.carModel.deleteOne({ cardId }).exec();
        if (car.deletedCount === 0) {
          throw new HttpException('Not found',404);
       }
       return car;
    }

    public  async getCarbyId(id:string):Promise<any>{
       const cardId=String(id);
       const cars=this.carModel.find({cardId}).exec();
       if(!cars){
          throw new HttpException('Not found',404);
       }
       else
       return cars;
    }

    public  async updateCarById(id:string,property_name:string,property_value:string):Promise<any>{
        
        const cardId=String(id);
        const propertyName=String(property_name);
        const propertyValue=String(property_value);
        const car = await this.carModel.findOneAndUpdate({ cardId },{[propertyName]: propertyValue,}) .exec();
         if (!car) {
        throw new HttpException('Not Found', 404);
      }
      return car;
       
}
   public async getAllCarsBookedbyUser(id: number): Promise<any> {

      const userId = Number(id);
      const car = await this.carModel.find( { userId }).exec();
      if (!car) {
         throw new HttpException('Not Found', 404);
      }
      return car;

   }
}
