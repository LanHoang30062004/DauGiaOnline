import styles from "./adminUser.module.css";
import { FaUsers } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";
import { BiSolidInbox } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function AdminUser() {
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:2000/users")
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleDeleteUser = (id) => {
        setUserToDelete(id);
        setShowModal(true);
    };

    const confirmChange = () => {
        axios.delete(`http://localhost:2000/users/${userToDelete}`)
            .then(() => {
                setData(data.filter(user => user.id !== userToDelete));
                setShowModal(false);
            })
            .catch((err) => console.log(err));
    };

    const cancelChange = () => {
        setShowModal(false);
    };

    const handleToUsers = () => {   
        navigate("/admin-user");
    };

    const handleToProducts = () => {   
        navigate("/admin-product");
    };

    const handleToPayHistory = () => {   
        navigate("/transaction-history");
    };

    const handleToLogOut = () => {   
        navigate("/");
    };

    return (
        <>
            <div>
                <div className={styles.app}>
                    <div className={styles.sidebar}>
                        <div className={styles.logo}>
                            <h1>ADMIN</h1>
                        </div>
                        <ul className={styles.menu}>
                            <li onClick={handleToUsers} className={styles.menuItem + " " + styles.active}>
                                <span className={styles.icon}><FaUsers /></span>
                                <span className={styles.text}>Users</span>
                            </li>
                            <li onClick={handleToProducts} className={styles.menuItem}>
                                <span className={styles.icon}><FaBoxArchive /></span>
                                <span className={styles.text}>Products</span>
                            </li>
                            <li onClick={handleToPayHistory} className={styles.menuItem}>
                                <span className={styles.icon}><FaMoneyCheckDollar /></span>
                                <span className={styles.text}>Payment History</span>
                            </li>
                        </ul>
                        <div className={styles.sidebarUser} onClick={handleToLogOut}>
                            <img src="/Megan Fox-avatar.jpg" alt="User Avatar" className={styles.avatar} />
                            <p className={styles.username}>Megan Fox</p>
                        </div>
                    </div>
                    <div className={styles.mainContent}>
                        <div className={styles.header}>
                            <h1>USERS</h1>
                        </div>
                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <h1>{data.length}</h1>
                                <h1>Total Users</h1>
                            </div>
                            <div className={styles.stat}>
                                <h1>2</h1>
                                <h1>Admin</h1>
                            </div>
                        </div>
                        <div className={styles.searchBar}>
                            <input type="text" placeholder="Search by Name or Email" />
                        </div>
                        <div className={styles.scrollableDiv}>
                            <table className={styles.userTable}>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>NAME</th>
                                        <th>EMAIL</th>
                                        <th>ACCOUNT BALANCE</th>
                                        <th>ACTIONS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((user) =>
                                        <tr key={user.id}>        
                                            <td>{user.id}</td>                              
                                            <td>{user.name}</td>                                        
                                            <td>{user.email}</td>                                        
                                            <td>{user.balance}</td>  
                                            <td>
                                                <button onClick={() => navigate(`/update-user/${user.id}`)} className={styles.edit}><BiSolidInbox /></button> 
                                                <button onClick={() => handleDeleteUser(user.id)} className={styles.delete}><FaTrash /></button>
                                            </td>
                                        </tr>
                                    )}                                   
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className={styles.notificationAlert}>
                    <div className={styles.notification}>
                        <p>Are you sure you want to delete this user?</p>
                        <div className={styles.notificationButton}>
                            <button className={styles.btnConfirm} onClick={confirmChange}>Confirm</button>
                            <button className={styles.btnCancel} onClick={cancelChange}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
            
            <ToastContainer />
        </>
    );
}

export default AdminUser;
