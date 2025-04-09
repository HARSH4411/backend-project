

import dotenv from 'dotenv';
dotenv.config({path : './env'})
import connectDB from './db/index.db.js';


connectDB()
.then(() => {
app.listen(process.env.PORT || 3000, ()=>{
    console.log(`server is running at port ${process.env.PORT}`); // Log the server start
  }) // Log the successful connection
  // You can add your application logic here, such as starting an Express server or other operations
})
.catch((error) => {
  console.error("Error connecting to MongoDB:", error); // Exit the process with failure
})












