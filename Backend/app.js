//goL5KdoZy5NFWZHg
const express = require('express');
const mongoose = require('mongoose');
const router = require("./Routes/EmployeeRoute");

const app = express();
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors());
app.use("/employees", router);

mongoose.connect("mongodb+srv://admin:goL5KdoZy5NFWZHg@cluster0.ukyt6sx.mongodb.net/") 
.then(()=>console.log("Connected to DB"))
.then(()=>{
    app.listen(5000);
})
.catch((err)=>console.log((err)));
