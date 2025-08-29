const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Employee = require("../Model/EmployeeModel");
const EmployeeController = require("../Controllers/EmployeeController");

router.get("/", EmployeeController.getAllEmployees);
router.post("/", EmployeeController.createEmployee);
router.get("/:id", EmployeeController.getById);
router.put("/:id", EmployeeController.UpdateEmployee);
router.delete("/:id", EmployeeController.DeleteEmployee);

module.exports = router;
