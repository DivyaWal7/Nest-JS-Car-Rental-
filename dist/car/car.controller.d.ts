import { CarService } from './car.service';
import { CarDto } from './car.dto';
export declare class CarController {
    private carService;
    constructor(carService: CarService);
    getCars(): Promise<import("./interfaces/car.interface").ICar[]>;
    postCars(car: CarDto): Promise<import("./interfaces/car.interface").ICar>;
    deleteCars(id: number): Promise<any>;
    getCarbyId(id: number): Promise<any>;
    updateCarById(id: number, query: any): Promise<any>;
}
