import { Model } from 'mongoose';
import { ICar } from './interfaces/car.interface';
export declare class CarService {
    private readonly carModel;
    constructor(carModel: Model<ICar>);
    getCars(): Promise<ICar[]>;
    postCars(car: any): Promise<ICar>;
    deleteCars(id: number): Promise<any>;
    getCarbyId(id: number): Promise<any>;
    updateCarById(id: number, property_name: string, property_value: string): Promise<any>;
}
