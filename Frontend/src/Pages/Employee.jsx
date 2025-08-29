import React from 'react'


function Employee(props) {
  const {name, age, gmail}=props.employee;
  return (
    <div>
        
        
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Email: {gmail}</p><br/><br/><br/>
    </div>
  )
}

export default Employee
