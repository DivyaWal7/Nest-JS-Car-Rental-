import { Injectable ,HttpException} from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {IUser} from './interfaces/user.interface'
import {UserDto} from './user.dto'


@Injectable()
export class UserService {
    
    // private cars=CARS; //mock data test

    constructor(@InjectModel('Users') private readonly userModel: Model<IUser>) {}

    public getUsers(){ 
            const cars=this.userModel.find().exec();
            return cars;
    }

    public async postUsers(user){
        const users= await new this.userModel(user);
        return users.save();
    }
s

    public  async deleteUser(id:number):Promise<any>{
        const cardId=Number(id);
        const car = await this.userModel.deleteOne({ cardId }).exec();
        if (car.deletedCount === 0) {
          throw new HttpException('Not found',404);
       }
       return car;
    }

    public  async getUserbyId(id:number):Promise<any>{
       const cardId=Number(id);
       const cars=this.userModel.find({cardId}).exec();
       if(!cars){
          throw new HttpException('Not found',404);
       }
       else
       return cars;
    }

    public  async updateUserById(id:number,property_name:string,property_value:string):Promise<any>{
        
        const cardId=Number(id);
        const propertyName=String(property_name);
        const propertyValue=String(property_value);
        const car = await this.userModel.findOneAndUpdate({ cardId },{[propertyName]: propertyValue,}) .exec();
         if (!car) {
        throw new HttpException('Not Found', 404);
      }
      return car;
       
}

    public async getListofUsers(id: number): Promise<any> {
        const cardId = Number(id);
        const cars=this.userModel.find({cardId}).exec();
        if (!cars) {
            throw new HttpException('Not Found', 404);
        }
        return cars;

    }
}
