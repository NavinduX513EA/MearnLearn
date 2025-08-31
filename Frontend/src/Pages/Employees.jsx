import React, { useEffect, useState } from 'react'
import Nav from '../Components/Nav.jsx';
import axios from "axios";
import Employee from './Employee.jsx';
import {useReactToPrint} from "react-to-print"
import { useRef } from 'react';

const URL= "http://localhost:5000/employees"
const fetchHandler = async () =>{
    return await axios.get(URL).then((res) => res.data)
}
function Employees() {

    const [employees, setEmployees]=useState();
    useEffect(() => {
        fetchHandler().then((data) => setEmployees(data.employees));
    }, []);
const ComponentsRef = useRef();
const HandlePrint = useReactToPrint({
    contentRef: ComponentsRef,
    documentTitle: "Employee Details",
    onAfterPrint: () => alert("Print Successful!"),
})
const [searchQuery, setSearchQuery] = useState("");
const [noResults, setNoResults] = useState(false);
const HandleSearch = () =>{
    fetchHandler().then((data) => {
        const filtered = data.employees.filter((employee) =>
            employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            employee.age.toString().includes(searchQuery) ||
            employee.gmail.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setEmployees(filtered);
        setNoResults(filtered.length === 0);
    });
}
const HandleSendReport = () => {
    //Create the WhatsApp chat URL
    const phoneNumber = "+94775723246";
    const message = `Selected Employee Report`;
    const WhatsAppUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    //open whatsapp chat in new window
    window.open(WhatsAppUrl, '_blank');
}
  return (
    <div>
        <Nav />
        <h2>Employee Details</h2>
        <input onChange={(e) => setSearchQuery(e.target.value)} name="search" type='text' placeholder='Search an employee' />
        <button onClick={HandleSearch}>Search</button>

        {noResults && <p>No results found</p>}

        <div ref={ComponentsRef}>
        {employees && employees.map((employee, i) => (
            <div key={i}>
                <Employee employee={employee} />
            </div>
        ))}
        </div>
        <button onClick={HandlePrint}>Download as A PDF</button>
        <button onClick={HandleSendReport}>Send Report via WhatsApp</button>
    </div>
  )
}

export default Employees