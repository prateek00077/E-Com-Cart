import express from "express";
import { configDotenv } from "dotenv";
import { createServer } from "http";
import { connectDB } from "./config/connectDB.js";
configDotenv();

const app = express();

const server = createServer(app);
connectDB();

server.listen(5000, ()=>{
    console.log(`Server is listening on port : ${5000}`);
});