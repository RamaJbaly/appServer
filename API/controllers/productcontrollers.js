const { message } = require("statuses")
const product_MODEL = require("../models/proudct.model")

const createproduct = async (req, res) => {
    const {
        prouductName,
        image,
        price,
    } = req.body
    try {
        const prouduct = await product_MODEL.create({
            prouductName: prouductName,
            image: image,
            price: price,


        })
        res.status(200).json({
            success: true,
            message: "prouduct created",
            data: prouduct,
        })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.name,
            message: error.message
        })
    }
}

const  Findprouduct = async (req, res) => {
    const { prouductName } = req.body
    try {
        const prouduct = await product_MODEL.find({ prouductName })
        res.status(200).json({
            success: true,
            data: prouduct,
        })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.name,
            message: error.message

        })
    }
}

const Deletprouduct = async (req, res) => {
    const { prouductName } = req.body
    try {
        const prouduct = await product_MODEL.deleteOne({ prouductName })
        res.status(200).json({
            success: true,
            data: prouduct,
        })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.name,
            message: error.message

        })
    }
}
const getAllProducts = async (req, res) => {
    try {
      // Fetch all products from the database
      const products = await product_MODEL.find();
      
      // Check if any products exist
      if (products.length === 0) {
        return res.status(404).json({
          success: false,
          message: "No products found",
        });
      }
  
      // Respond with all products
      res.status(200).json({
        success: true,
        message: "Products retrieved successfully",
        data: products,
      });
    } catch (error) {
      // Handle any errors that occur during the database query
      res.status(500).json({
        success: false,
        error: error.name,
        message: error.message,
      });
    }
}

module.exports = {
    createproduct,
    Deletprouduct,
    Findprouduct,
    getAllProducts

}