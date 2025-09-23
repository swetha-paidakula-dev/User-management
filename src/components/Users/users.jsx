import React, { useEffect, useState } from "react";
import './users.css'

const Users = () => {
    const [users,setUser] = useState([]);
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
        <div>
            <button>ADD USER</button>
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
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>

                    </tr>
                    
                ))}
                
            </tbody>
        </table>
        </div>
    )
}
export default Users;