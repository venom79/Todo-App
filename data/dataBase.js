import mongoose from "mongoose";


export const connectDB = async ()=>{
    await mongoose.connect(process.env.MONGO_URI,{dbName:"backendAPI"});
}
connectDB().then((c)=>console.log("dataBase connected!")).catch(err => console.log(err));