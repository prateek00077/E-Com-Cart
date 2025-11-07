import { Router } from "express";
import { addCartItem, deleteItem, getCartItems } from "../controllers/cart.controller.js";

const cartRouter = Router();

cartRouter.get('/', getCartItems);
cartRouter.post('/', addCartItem);
cartRouter.delete('/:id', deleteItem);

export default cartRouter;