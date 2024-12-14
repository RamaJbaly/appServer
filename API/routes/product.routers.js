const express = require("express");
const { Login } = require("../controllers/user.controllers");
const { createproduct, Findprouduct } = require("../controllers/productcontrollers");

const proudctRote = express.Router();

proudctRote.post("/createProduct",createproduct )
proudctRote.post("/FindProduct",Findprouduct)

module.exports = proudctRote