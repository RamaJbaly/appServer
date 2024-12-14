const { Schema, model } = require("mongoose");

const prouductSchema = new Schema({
     
    prouductName: {
        type:String ,
        required: true ,
        unique: true ,
        maxLength: 14 ,
        minLength:4,
        spilt: " ",
      },
       price: {
        type: Number ,
        required:true,
        unique: true ,
       },
       image :{
        type: String ,
        unique:true ,
       },
           
})

const product_MODEL = model("product", prouductSchema);
module.exports = product_MODEL 

