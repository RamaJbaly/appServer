const express = require("express");
const userRouter = express.Router();
const { createUser, FindUser, DeletUser, updateuser, Login } = require("../controllers/user.controllers");

userRouter.post("/createUser", createUser);

userRouter.post("/FindUser", FindUser)
userRouter.delete("/DeletUser", DeletUser)
userRouter.patch("/ updateuser", updateuser)
userRouter.post("/login", Login)
userRouter.post("/log-in", Login)


module.exports = userRouter;