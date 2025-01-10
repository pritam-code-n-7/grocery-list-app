import mongoose from "mongoose";

const grocerySchema = new mongoose.Schema({
    item:{
        type:String,
        required:true,
    },
    status:{type:Boolean, required:true, default:false}
},{timestamps:true})


export const Grocery = mongoose.models.Grocery ?? mongoose.model('Grocery',grocerySchema)