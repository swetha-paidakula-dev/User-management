import React, { useState } from "react";
//import Users from './components/Users';
//import {useNavigate} from 'react-router-dom';

const Form = ( ) => {
    const [formData, setFormData] = useState({
        id: '',
        first_name: '',
        last_name: '',
        email: '',
        department: ''
    });

  const userdata = (event) => {
    event.preventDefault();

    fetch('http://localhost:4000/users/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userdata)
    })
    .then(response => {
        if (response.ok) {
            alert("user added successfully")
            return response.json(); 
        } else {
            alert("Failed to add user")
        }
    })
    .catch(error => {
        console.error(error);
        alert("Error while adding user");
    });
};

    return (
        <div className="container">
        <h1>User Management Form</h1>
        <div>
        <label>id</label>
        <input type="text" name="id" placeholder="Enter id"/>
        </div>
        <div>
        <label>First Name</label>
        <input type="text" name="First Nmae" placeholder="Enter first-name"/>
        </div><div>
        <label>Last Name</label>
        <input type="text" name="Last Name" placeholder="Enter last-name" />
        </div><div>
        <label>Email</label>
        <input type="text" name="Email" placeholder="Enter email"/>
        </div><div>
        <label>Department</label>
        <input type="text" name="Department" placeholder="Enter department"/>
        </div>
    </div>
    )
}

export default Form