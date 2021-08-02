export class CarDto{
    readonly carLicenseNumber:string;
    readonly manufacturer:string;
    readonly model:string;
    readonly basePrice:number;
    readonly PPH:number;
    readonly securityDeposit:number;
    readonly status:string;
    readonly dateTimeFrom:Date;
    readonly dateTimeto:Date;
    users:[{
        readonly userid:number,
        readonly duration:number,
        readonly totalPrice:number,
        readonly dateTimeFrom:Date,
        readonly dateTimeto:Date
   }]
}
