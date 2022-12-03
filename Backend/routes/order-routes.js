const express = require("express");
const orderRouter = express.Router();
const Order = require("../model/Order");
const ordersController = require("../controllers/orders-controller");


//this route will provide all the  orders
orderRouter.get("/", ordersController.getAllOrders);
orderRouter.post("/", ordersController.addOrder);
orderRouter.get("/:id", ordersController.getById);
orderRouter.delete("/:id", ordersController.deleteOrder)

module.exports = orderRouter;