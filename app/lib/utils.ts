import mongoose from "mongoose";

export const connecDB = async () => {
    try{
        if(mongoose.connection.readyState) return
        mongoose.connect(process.env.DB)
        console.log("DB->",mongoose.connection.readyState)
    }
    catch(err){
        console.log("EXECUTING ELSE")
        err => console.log(err);
    }

} 