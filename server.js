import { app } from "./app.js";
import { connectDB }from "./data/dataBase.js";

//connecting dataBase
connectDB()


app.listen(process.env.PORT,()=>{
    console.log(`server started at http://localhost:${process.env.PORT} in ${process.env.NODE_ENV} mode`);
})