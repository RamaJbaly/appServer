const { Schema, model } = require("mongoose");

const userSchema = new Schema({
 
      UserName: {
        type:String ,
        required: true ,
        unique: true ,
        maxLength: 14 ,
        minLength:4,
        spilt: " "
      },
       phone: {
        type: String ,
        required:true,
        unique: true ,
       },
       email :{
        type: String ,
        unique:true ,
       },
       password: {
        type: String ,
        required: 6,
        maxLength:12,
       },
      orderHistory :{
        type: Array ,
        default: [] ,
       }
})

const USER_MODEL = model("user", userSchema);
module.exports = USER_MODEL 