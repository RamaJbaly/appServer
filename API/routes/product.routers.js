const express = require("express");
const { createproduct, Findprouduct, getAllProducts, Deletprouduct } = require("../controllers/productcontrollers");

const proudctRote = express.Router();

proudctRote.post("/createProduct",createproduct )
proudctRote.post("/FindProduct",Findprouduct)
proudctRote.post("/getAllProducts",getAllProducts)
proudctRote.delete('/deleteProduct',Deletprouduct)

module.exports = proudctRote