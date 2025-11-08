import { Router } from "express";
import { checkOut } from "../controllers/checkout.controller.js";

const checkoutRouter = Router();

checkoutRouter.post('/', checkOut);

export default checkoutRouter;