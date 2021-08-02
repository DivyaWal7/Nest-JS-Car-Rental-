import * as mongoose from 'mongoose';

export const UserSchema=new mongoose.Schema({
    id:Number,
    name:String,
    mobile:Number,
    totalPrice:Number,
    cars:[{
         cardId:Number,
         duration:Number,
         price:Number,
         dateTimeFrom:Date,
         dateTimeto:Date
    }]
})