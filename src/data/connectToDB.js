import mongoose from "mongoose";

let isConnected = false;

const connectOptions = {
  dbname: "newlifeband",
  useNewUrlParser: true,
  useunifiedTopology: true,
};

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) return;
  try {
    await mongoose.connect(process.env.MONGODB_URI, connectOptions);
    console.log("connectToDB ~> Connection à MongoDB établie");
    isConnected = true;
  } catch (error) {
    console.log("connectToDB ~> Error :", error);
  }
};
