import mongoose from "mongoose";

const dbConnect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            dbName:process.env.DB_NAME
        })
        console.log('mongodb connected');
          
    } catch (error) {
        console.error(error);
        throw new Error('database connection failed')
    }
}

export default dbConnect;