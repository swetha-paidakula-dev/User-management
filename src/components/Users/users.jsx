import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom"
import './users.css'

const Users = () => {
    const [users,setUser] = useState([]);
    const [searchInput, setSearchInput] = useState('')
    const navigate = useNavigate();
    const searchViewbox = event => setSearchInput(event.target.value)
    useEffect(() => {
        fetch('http://localhost:4000/user/')
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

  const filterusers = users.filter(each =>
    each.first_name.toLowerCase().includes(searchInput.toLowerCase()) ||
    each.last_name.toLowerCase().includes(searchInput.toLowerCase()) ||
    each.email.toLowerCase().includes(searchInput.toLowerCase()) ||
    each.department.toLowerCase().includes(searchInput.toLowerCase())
  )
  
    if (searchInput !== '' && filterusers.length === 0){
    alert("No details found");
  }

    return(
        <><h1>User Management System</h1><div>
            <div>
            <Link to="/add-user" className="button">
                ADD USER
            </Link>
            <input 
            type="text"
            placeholder="Search by first_name,last_name,email or department"
            value={searchInput}
            onChange={searchViewbox}
            />
            </div>
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
                    {filterusers.map((user) => (
                        <tr
                            key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                            <td>{user.department}</td>
                            <td>
                                <Link to="/edit-user" className="button1">
                                    Edit
                                </Link>
                                <Link to={'/delete-user?id=${user.id}'} className="button1">
                                Delete
                                </Link>
                            </td>

                        </tr>

                    ))}

                </tbody>
            </table>    
        </div></>
    )
}
export default Users;