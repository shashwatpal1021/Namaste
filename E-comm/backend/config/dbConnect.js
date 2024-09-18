import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose";
const url = process.env.MONGODB_URI

const dbConnect = async () => {
  try {
    mongoose.set("strictQuery", false)
    const connected = await mongoose.connect(url);
    console.log(`Mongodb is connect ${connected.connection.host}`)
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
}

export default dbConnect;