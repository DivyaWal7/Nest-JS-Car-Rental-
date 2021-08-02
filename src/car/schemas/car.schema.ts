import * as mongoose from 'mongoose';

export const CarSchema=new mongoose.Schema({
    carLicenseNumber:String,
    manufacturer:String,
    model:String,
    basePrice:Number,
    PPH:Number,
    securityDeposit:Number,
    status:String,
    dateTimeFrom:Date,
    dateTimeto:Date,
    users:[{
        userid:Number,
        duration:Number,
        totalPrice:Number,
        dateTimeFrom:Date,
        dateTimeto:Date
   }]
})