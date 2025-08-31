const mongoose = require("mongoose");//add mongoose
const Schema = mongoose.Schema;//assign Schema to added mongoose

const regiSchema =new Schema({
    name:{
        type:String,//datatype
        required:true,//validate
    },

    gmail:{
        type:String,
        required:true,//validate

    },
    password:{
        type:String,
        required:true,//validate
    }

})

//export the created modell
module.exports = mongoose.model(
    "Register", //filename

    regiSchema //function anme
)