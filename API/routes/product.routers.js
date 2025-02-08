const express = require("express");
const { createproduct, Findprouduct, getAllProducts } = require("../controllers/productcontrollers");

const proudctRote = express.Router();

proudctRote.post("/createProduct",createproduct )
proudctRote.post("/FindProduct",Findprouduct)
proudctRote.post("/getAllProducts",getAllProducts)


module.exports = proudctRote