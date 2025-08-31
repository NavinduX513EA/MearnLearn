import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function Employee(props) {
  const {_id, name, age, gmail}=props.employee;

  const history = useNavigate();
  const DeleteHandler = async () => {
    await axios.delete(`http://localhost:5000/employees/${_id}`)
      window.location.reload() // Force page refresh to show updated list
      
  };
  return (
    <div>
        
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Email: {gmail}<br/><br/>
        <Link to={`/employee-details/${_id}`}style={{ marginRight: "10px" }}>
          Edit
        </Link>
        <button onClick={DeleteHandler}>Delete</button>
          </p><br/><br/><br/>
    </div>
  )
}

export default Employee
