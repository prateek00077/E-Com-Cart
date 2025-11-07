import express from "express";
import { configDotenv } from "dotenv";
import { createServer } from "http";
configDotenv();

const app = express();

const server = createServer(app);

server.listen(5000, ()=>{
    console.log(`Server is listening on port : ${5000}`);
});