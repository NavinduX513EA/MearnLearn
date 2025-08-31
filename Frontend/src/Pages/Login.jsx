import React from 'react'
import Nav from '../Components/Nav.jsx';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Login() {
  const history = useNavigate();
    const [employee, setEmployee] = useState({
      gmail: '',
      password: '',
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setEmployee({ ...employee, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try{
        const response = await sendRequest();
        console.log("Login response:", response); // Debug log
        if (response.status === "ok") {
          history('/employee-details');
        } else {
          alert(`Login failed: ${response.message || "Invalid credentials"}`);
        }
      } catch (error) {
        console.error("Error during login:", error);
        console.error("Error response:", error.response?.data); // Debug log
        alert("Login failed. Please check your credentials.");
      }
    };
    
    const sendRequest = async () => {
      return axios.post("http://localhost:5000/login", {
        gmail: employee.gmail,
        password: employee.password,
      })
      .then((res) => res.data);
    };
  
    return (
      <div>
        <Nav />
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="gmail">Email:</label>
            <input 
              type="email" 
              id="gmail"  
              name="gmail" 
              value={employee.gmail}
              onChange={handleInputChange} 
              required 
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input 
              type="password" 
              id="password"  
              name="password" 
              value={employee.password}
              onChange={handleInputChange} 
              required 
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    )
}

export default Login