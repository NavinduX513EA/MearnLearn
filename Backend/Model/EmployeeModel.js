const mongoose = require("mongoose");//add mongoose
const Schema = mongoose.Schema;//assign Schema to added mongoose

const employeeSchema =new Schema({
    name:{
        type:String,//datatype
        required:true,//validate
    },

    age:{
        type:Number,
        required:true,//validate

    },
    gmail:{
        type:String,
        required:true,//validate
    }

})

//export the created modell
module.exports = mongoose.model(
    "EmployeeModel", //filename
    employeeSchema //function anme
)