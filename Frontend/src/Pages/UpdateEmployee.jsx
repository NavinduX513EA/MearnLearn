import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Employees from './Employees'
import Employee from "./Employee.jsx"



function UpdateEmployee() {
    const [inputs, setInputs] = useState(null);
    const history = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchHandler = async () => {
            await axios.get(`http://localhost:5000/employees/${id}`)
            .then(res => res.data)
            .then(data => setInputs(data.emp))
        };
        fetchHandler();
    }, [id]);

    const sendRequest = async () => {
        await axios.put(`http://localhost:5000/employees/${id}`, {
            name: String(inputs.name),
            age: Number(inputs.age),
            gmail: String(inputs.gmail),
        })
        .then(res => res.data)
    };
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

    if (!inputs) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div>UpdateEmployee</div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={inputs.name || ''}
                        required
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Age:</label>
                    <input
                        type="number"
                        name="age"
                        value={inputs.age || ''}
                        required
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="gmail"
                        value={inputs.gmail || ''}
                        required
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Update Employee</button>
            </form>
        </div>
    );
}

export default UpdateEmployee