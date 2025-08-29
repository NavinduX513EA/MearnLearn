const Employee = require("../Model/EmployeeModel");

const getAllEmployees = async (req, res, next) => {
    let employees;
    try{
        employees = await Employee.find();
    }
    catch(err){
        console.log(err);
    }
    //not found
    if(!employees){
        return res.status(404).json({Message:"No employees found"});
    }
    //get all employees
    return res.status(200).json({employees});

};
const createEmployee = async (req, res, next) => {
    const {name, age, gmail} = req.body;
    let emp;
    try{
        emp = new Employee({
            name, age, gmail
        });
        await emp.save();
    }catch(err){
        console.log(err);
    }
    if(!emp){
        return res.status(500).json({Message:"Unable to create employee"});
    }
    return res.status(200).json({emp});
};
const getById= async (req, res, next) => {
    const id = req.params.id;
    let emp;
    try{
        emp = await Employee.findById(id);

    }catch(err){
        console.log(err);
    }
    if(!emp){
        return res.status(404).json({Message:"Employee not found"});
    }
    return res.status(200).json({emp});
};

const UpdateEmployee = async (req, res, next) => {
    const id = req.params.id;
    const {name, age, gmail} = req.body;
    let emp;
    try{
        emp = await Employee.findByIdAndUpdate(id, {
            name: name,
            age: age,
            gmail: gmail
        });
        emp = await emp.save();
    }catch(err){
        console.log(err);
    }
    if(!emp){
        return res.status(404).json({Message:"Unable to update employee details."});
    }
    return res.status(200).json({emp});
};
const DeleteEmployee = async (req, res, next) => {
    const id = req.params.id;
    let emp;
    try{
        emp = await Employee.findByIdAndDelete(id);
    }catch(err){
        console.log(err);
    }
    if(!emp){
        return res.status(404).json({Message:"Unable to delete employee details."});
    }
    return res.status(200).json({emp});
};
exports.getAllEmployees = getAllEmployees;
exports.createEmployee = createEmployee;
exports.getById = getById;
exports.UpdateEmployee = UpdateEmployee;
exports.DeleteEmployee = DeleteEmployee;

