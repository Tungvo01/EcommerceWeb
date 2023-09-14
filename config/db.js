import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`connect tp mongodb Database ${conn.connection.host}`);
  } catch (error) {
    console.log(`error in mongodb ${error}`.bgCyan.white);
  }
};

export default connectDB;
