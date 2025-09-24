import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom"
import './users.css'

const Users = () => {
    const [users,setUser] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:4000/users/')
        .then(response => response.json())
      .then(data => {
        setUser(data);
        console.log(data);
      })
      .catch(error => {
        console.log(error);
        alert("error while fetching user details")
      });
    },[])
   
    return(
        <><h1>User Management System</h1><div>
            <Link to="/add-user" className="button">
                ADD USER
            </Link>
            <table className="usertable">
                <thead>
                    <tr>
                        <td>id</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Email</td>
                        <td>Department</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr
                            key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                            <td>{user.department}</td>
                            <td>
                                <button className="button1">Edit</button>
                                <button className="button1">Delete</button>
                            </td>

                        </tr>

                    ))}

                </tbody>
            </table>
        </div></>
    )
}
export default Users;