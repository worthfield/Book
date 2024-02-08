import mongoose from "mongoose";
import app from "./index.js";
mongoose
  .connect(
    process.env.MONGOURL
  )
  .then(()=>{
    console.log('MongoDb is connected')
    app.listen(process.env.PORT,()=>{
        console.log('connecting to port '+ process.env.PORT)
    })
  }).catch((error)=>{
    console.log(error)
  });
