import "./style.css"
import { FaUsers } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";
import React, { useState } from "react";
const UpdateUser = () => {
    const [user, setUser] = useState({
        name: 'Megan Fox',
        email: 'meganfox69@example.com',
        date: '16/05/1986',
        address: '190 Dien Bien Phu, Da Nang, Viet Nam',
        balance: '8.420.030.000 VND'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleUpdate = () => {
        alert('User information updated');
    };

    const handleCancel = () => {
        alert('Update canceled');
    };

    return (
        <div className="app">
            <div className="sidebar">
                <div className="logo">
                    <h1>ADMIN</h1>
                </div>
                <ul className="menu">
                    <li className="menu-item active">
                        <span className="icon"><FaUsers /></span>
                        <span className="text">Users</span>
                    </li>
                    <li className="menu-item">
                        <span className="icon"><FaBoxArchive /></span>
                        <span className="text">Products</span>
                    </li>
                </ul>
                <div className="sidebar-user">
                    <img src="/Megan Fox-avatar.jpg" alt="User Avatar" className="avatar" />
                    <p className="username">Megan Fox</p>
                </div>
            </div>
            <div className="main-content">
                <div className="header">
                    <h1>UPDATE USERS</h1>
                </div>
                <div className="user-update">
                    <div className="user-details">
                        <div className="user-column">
                            <input type="text" name="name" value={user.name} onChange={handleChange} />
                            <input type="email" name="email" value={user.email} onChange={handleChange} />
                            <input type="text" name="date" value={user.date} onChange={handleChange} />
                        </div>
                        <div className="user-column">
                            <input type="text" name="address" value={user.address} onChange={handleChange} />
                            <input type="text" name="balance" value={user.balance} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="user-actions">
                        <button onClick={handleCancel}>Cancel</button>
                        <button onClick={handleUpdate}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default UpdateUser; 