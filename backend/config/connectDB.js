import mongoose from "mongoose";

export function connectDB() {
    try {
        mongoose.connect("mongodb://localhost:27017/e-com");
        console.log(`mongoDB is connected`);
    } catch(err) {
        console.log(`Error occurred while connecting to databse : ${err}`);
    }
}