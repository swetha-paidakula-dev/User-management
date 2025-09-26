import React, { useState } from "react";
import { Link } from "react-router-dom"
//import Users from './components/Users';
import {useNavigate} from 'react-router-dom';

const Form = ( ) => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        department: ''
    });
const navigate = useNavigate();
  const addUser = (event) => {
    //console.log(event);
    event.preventDefault();

    fetch('http://localhost:4000/user/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        // if (response.ok) {
        //     alert("user added successfully")
        //     return response.json(); 
        // } else {
        //     alert("Failed to add user")
        // }
        alert("User addedd correctly");
        navigate("/home");
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
        <label>First Name</label>
        <input type="text" name="First Nmae" placeholder="Enter first-name"
        value={formData.first_name}
        onChange={(event) => setFormData({...formData,first_name:event.target.value})}/>
        </div><div>
        <label>Last Name</label>
        <input type="text" name="Last Name" placeholder="Enter last-name"
        value={formData.last_name}
        onChange={(event) => setFormData({...formData,last_name:event.target.value})}
        />
        </div><div>
        <label>Email</label>
        <input type="text" name="Email" placeholder="Enter email"
        value={formData.email}
        onChange={(event) => setFormData({...formData,email:event.target.value})}/>
        </div><div>
        <label>Department</label>
        <input type="text" name="Department" placeholder="Enter department"
        value={formData.department}
        onChange={(event) => setFormData({...formData,department:event.target.value})}/>
        </div>
        <button onClick={addUser}>Add User</button>
    </div>
    )
}

export default Form