import React, { useState } from "react";
import { Link } from "react-router-dom"

//import Users from './components/Users';
import {useNavigate} from 'react-router-dom';

const Form = ( ) => {
  const navigate = useNavigate();
    const [formData, setFormData] = useState({
        id: '',
    });

  const userdata = (event) => {
    event.preventDefault();

    fetch('http://localhost:4000/users/', {
        method: 'DELETE',
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
          alert("User deleted successfully");
        } else {
          alert("Failed to delete user");
        }
      })
      .catch(error => {
        console.error(error);
        alert("Error deleting user");
      });
};

    return (
        <div className="container">
        <h1>User Management Form</h1>
        <div>
        <label>id</label>
        <input type="text" name="id" placeholder="Enter id"
        value={formData.id}
        onChange={(event) => setFormData({...formData,id:event.target.value})}/>
        </div>
        <button onClick={userdata}>Delete User</button>
    </div>
    )
}

export default Form