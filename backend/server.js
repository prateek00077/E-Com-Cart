import express from "express";
import { configDotenv } from "dotenv";
import { createServer } from "http";
import { connectDB } from "./config/connectDB.js";
import productRouter from "./routes/product.route.js";
import cartRouter from "./routes/cart.route.js";
configDotenv();

const app = express();

const server = createServer(app);
connectDB();
app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);

server.listen(process.env.PORT, ()=>{
    console.log(`Server is listening on port : ${process.env.PORT}`);
});