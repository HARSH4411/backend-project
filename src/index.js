
import express from 'express'; // Importing the express module
import dotenv from 'dotenv';
dotenv.config({path : './env'})
import connectDB from './db/index.db.js';
import {app} from './app.js'; // Importing the app instance from app.js


app.get('/teto',(req,res)=>{
  res.send('server is ready');
})

connectDB()
.then(() => {
app.listen(process.env.PORT || 3000, (req, res)=>{
    console.log(`server is running at port ${process.env.PORT}`); // Log the server start
  //
  }) // Log the successful connection
  // You can add your application logic here, such as starting an Express server or other operations
})
.catch((error) => {
  console.error("Error connecting to MongoDB:", error); // Exit the process with failure
})











