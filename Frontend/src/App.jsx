import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Components/Home/Home.jsx'
import Employee from './Pages/Employee.jsx';
import Employees from './Pages/Employees.jsx';
import { Route, Routes } from 'react-router-dom';
import AddEmployee from './Pages/AddEmployee.jsx';
import UpdateEmployee from './Pages/UpdateEmployee.jsx';
import Register from './Pages/Register.jsx';  
import Login from './Pages/Login.jsx';

function App() {
 
   //js codes
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/employee-details" element={<Employees />} />
        <Route path="/employee-details/:id" element={<UpdateEmployee />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
