import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    
    await mongoose.connect(process.env.CONNECT_DB_URL)
    console.log(`connected to db :${process.env.PORT}`)
   
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
