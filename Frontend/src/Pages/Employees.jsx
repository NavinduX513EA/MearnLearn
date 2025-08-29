import React, { useEffect, useState } from 'react'
import Nav from '../Components/Nav.jsx';
import axios from "axios";
import Employee from './Employee.jsx';

const URL= "http://localhost:5000/employees"
const fetchHandler = async () =>{
    return await axios.get(URL).then((res) => res.data)
}
function Employees() {

    const [employees, setEmployees]=useState();
    useEffect(() => {
        fetchHandler().then((data) => setEmployees(data.employees));
    }, []);

  return (
    <div>
        <Nav />
        <h2>Employee Details</h2>

        {employees && employees.map((employee, i) => (
            <div key={i}>
                <Employee employee={employee} />
            </div>
        ))}
        
    </div>
  )
}

export default Employees