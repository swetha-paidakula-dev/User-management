import React, { useState } from "react";
import Users from './components/users';

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
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            alert("User added successfully")
            return response.json(); 
        } else {
            alert("Failed to add user");
        }
    })
    .catch(error => {
        console.error(error);
        alert("Error while adding user");
    });
};

    return (
        <div>
        <h1>User Management Form</h1>
        <label>id</label>
        <input type="text" name="id" placeholder="Enter id"/>
        <label>First Name</label>
        <input type="text" name="First Nmae" placeholder="Enter first-name"/>
        <label>Last Name</label>
        <input type="text" name="Last Name" placeholder="Enter last-name" />
        <label>Email</label>
        <input type="text" name="Email" placeholder="Enter email"/>
        <label>Department</label>
        <input type="text" name="Department" placeholder="Enter department"/>
    </div>
    )
}

export default Form