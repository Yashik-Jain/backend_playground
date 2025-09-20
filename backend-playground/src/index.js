// require('/dotenv').config({path : './env'})
import {app} from "./app.js"
import dotenv from "dotenv";
import connectDB from "./db/index.js";


dotenv.config({
    path:'./env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log("Server Running..",process.env.PORT)
    })
})
.catch((err)=>{
    console.log("Mongo DB Connection Failed : : ",err)
});













// import express from "express";
// const app = express();

// (async ()=>{
//   try {
//    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//    app.on("error",(err)=>{
//     console.log("Error : ",err);
//     // throw err;
//    })


//    app.listen(process.env.PORT,()=>{
//     console.log("App is listening")
//    })

//   } catch(err) {
//     console.error(err)
//     // throw err;
//   }
// })()