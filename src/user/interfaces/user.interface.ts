import {Document} from 'mongoose'

export interface IUser extends Document{
    readonly id:number;
    readonly name:string;
    readonly mobile:number;
    readonly totalPrice:number;
    cars:[{
        readonly cardId:number;
        readonly duration:Number,
        readonly price:Number
        readonly dateTimeFrom:Date,
        readonly dateTimeto:Date
         }]
}