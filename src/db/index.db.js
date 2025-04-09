import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"; // Import the DB_NAME constant




const connectDB = async () => {
  try {
   const connetionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
   console.log(`\n MongoDB connected: ${connetionInstance.connection.host}`);
    
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with failure
  }
}

export default connectDB;