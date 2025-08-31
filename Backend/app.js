//goL5KdoZy5NFWZHg
const express = require('express');
const mongoose = require('mongoose');
const router = require("./Routes/EmployeeRoute");
require('dotenv').config();

const app = express();
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors());
app.use("/employees", router);


mongoose.connect(process.env.MONGODB_URI) 
.then(()=>console.log("Connected to DB"))
.then(()=>{
    app.listen(process.env.PORT || 5000);
})
.catch((err)=>console.log((err)));

//register model
require('./Model/Register');
const Employee = mongoose.model("Register");
app.post("/register", async (req, res) => {
    const { name, gmail, password } = req.body;
    const newEmployee = new Employee({ name, gmail, password });
    await newEmployee.save();
    res.status(201).send("Employee registered");
});

//login
app.post("/login", async (req, res) => {
    const { gmail, password } = req.body;
    try {
        const foundEmployee = await Employee.findOne({ gmail });
        if (!foundEmployee) {
            return res.status(401).json({ status: "error", message: "Invalid credentials" });
        } 
        if (foundEmployee.password === password) {
            return res.json({ status: "ok"});
        } else {
            return res.json({ status: "error", message: "Invalid password"});
        }
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ status: "error", message: "Server error" });
    }
});
