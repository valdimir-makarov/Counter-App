import mongoose from "mongoose";
import { DB_NAME } from "../src/constants.js";




 
  export   const connectDb = async ()=>{
        try{
       const connectionInstance  =      await  mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
    console.log( `MOnggoDB connected ${connectionInstance.connection.host }`)
        }
        catch(error){
            console.log(error)
        }
      }  
   
    
  
   




