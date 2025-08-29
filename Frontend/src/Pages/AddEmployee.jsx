import React, { useState } from 'react'
import Nav from '../Components/Nav.jsx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Employees from "./Employees.jsx";

function AddEmployee() {
    const history = useNavigate();
    const [inputs, setInputs]= useState({
        name: "",
        age: "",
        gmail: ""
    })
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(inputs);
        // You can also navigate to another page after submission
        sendRequest().then(() => history("/employee-details"));
    }
    const sendRequest = async () => {
        await axios.post("http://localhost:5000/employees", inputs)
    }


  return (

    <>
      <Nav />
      <div>AddEmployee</div>
    <form onSubmit={handleSubmit}>
        <div>
            <label>Name:</label>
            <input 
                type="text" 
                name="name"
                value={inputs.name}
                required
                onChange={handleChange}
            />
        </div>
        <div>
            <label>Age:</label>
            <input 
                type="number"
                name="age"
                value={inputs.age}
                required 
                onChange={handleChange}
                
            />
        </div>
        <div>
            <label>Email:</label>
            <input 
                type="email" 
                name="gmail"
                value={inputs.gmail}
                required 
                onChange={handleChange}
            />
        </div>
        <button type="submit">Add Employee</button>
    </form>
    </>
  )
}

export default AddEmployee