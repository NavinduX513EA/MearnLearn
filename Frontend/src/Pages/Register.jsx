import React from 'react'
import Nav from '../Components/Nav.jsx';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
function Register() {
  const history = useNavigate();
  const [employee, setEmployee] = useState({
    name: '',
    gmail: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() =>
      history('/employee-details') 
    )
    // Perform registration logic here
   // Redirect to home after successful registration
  };
  const sendRequest = async () => {
    await axios.post("http://localhost:5000/register", {
      name: employee.name,
      gmail: employee.gmail,
      password: employee.password
    });
  }


  return (
    <div>
      <Nav />
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={employee.name} name="name" onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="gmail">Email:</label>
          <input type="email" id="gmail" value={employee.gmail} name="gmail" onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={employee.password} name="password" onChange={handleInputChange} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register