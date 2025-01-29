import mongoose from "mongoose";

const grocerySchema = new mongoose.Schema({
    item:{
        type:String,
        required:true,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:false
    },
    status:{type:Boolean, required:true, default:false}
},{timestamps:true})


export const Grocery = mongoose.models.Grocery ?? mongoose.model('Grocery',grocerySchema)