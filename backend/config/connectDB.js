import mongoose from "mongoose";

export function connectDB() {
    try {
        mongoose.connect(`${process.env.MONGO_URI}`);
        console.log(`mongoDB is connected`);
    } catch(err) {
        console.log(`Error occurred while connecting to databse : ${err}`);
    }
}