import { Router } from "express";
import { addCartItem, getCartItems } from "../controllers/cart.controller.js";

const cartRouter = Router();

cartRouter.get('/', getCartItems);
cartRouter.post('/', addCartItem);

export default cartRouter;