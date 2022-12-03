const express = require("express");
const userRouter = express.Router();
const User = require("../model/User");
const usersController = require("../controllers/users-controller");

// Performing CRUD
// Creating getting User
userRouter.get("/", usersController.getAllUsers);
//Creating User
userRouter.post("/", usersController.addUser);
userRouter.get("/:id", usersController.getById)
// Updating user
userRouter.put("/:id", usersController.updateUser);
//Deleting User
userRouter.delete("/:id", usersController.deleteUser);

module.exports = userRouter;