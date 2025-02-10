import styles from "./adminUser.module.css"
import { FaUsers } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";
import { BiSolidInbox } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
function AdminUser() {
    return (
        <>
            <div>
                <div className={styles.app}>
                    <div className={styles.sidebar}>
                        <div className={styles.logo}>
                            <h1>ADMIN</h1>
                        </div>
                        <ul className={styles.menu}>
                            <li className={styles.menuItem +" "+ styles.active}>
                                <span className={styles.icon}><FaUsers /></span>
                                <span className={styles.text}>Users</span>
                            </li>
                            <li className={styles.menuItem}>
                                <span className={styles.icon}><FaBoxArchive /></span>
                                <span className={styles.text}>Products</span>
                            </li>
                        </ul>
                        <div className={styles.sidebarUser}>
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
                                <h1>9</h1>
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
                                        <th>NAME</th>
                                        <th>EMAIL</th>
                                        <th>ACCOUNT BALANCE</th>
                                        <th>ACTIONS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Megan Fox</td>
                                        <td>meganfox69@example.com</td>
                                        <td>8.420.030.000 VND</td>
                                        <td>
                                            <button className={styles.edit}><BiSolidInbox /></button>
                                            <button className={styles.delete}><FaTrash /></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Black Jack</td>
                                        <td>jack@well.com</td>
                                        <td>50.000 VND</td>
                                        <td>
                                            <button className={styles.edit}><BiSolidInbox /></button>
                                            <button className={styles.delete}><FaTrash /></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Kyrie Irving</td>
                                        <td>kyrie@gmail.com</td>
                                        <td>3.240.000.000 VND</td>
                                        <td>
                                            <button className={styles.edit}><BiSolidInbox /></button>
                                            <button className={styles.delete}><FaTrash /></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Gordon Buda</td>
                                        <td>budahaha@gmail.com</td>
                                        <td>200.500.000 VND</td>
                                        <td>
                                            <button className={styles.edit}><BiSolidInbox /></button>
                                            <button className={styles.delete}><FaTrash /></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Connor McDavid</td>
                                        <td>connor@well.com</td>
                                        <td>1.400.000.000 VND</td>
                                        <td>
                                            <button className={styles.edit}><BiSolidInbox /></button>
                                            <button className={styles.delete}><FaTrash /></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Mary Jane</td>
                                        <td>auroido@example.com</td>
                                        <td>3.000.000.000 VND</td>
                                        <td>
                                            <button className={styles.edit}><BiSolidInbox /></button>
                                            <button className={styles.delete}><FaTrash /></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Kyyyy</td>
                                        <td>Kyyyy@example.com</td>
                                        <td>3.000.000.000 VND</td>
                                        <td>
                                            <button className={styles.edit}><BiSolidInbox /></button>
                                            <button className={styles.delete}><FaTrash /></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Naruto</td>
                                        <td>Naruto@example.com</td>
                                        <td>3.000.000.000 VND</td>
                                        <td>
                                            <button className={styles.edit}><BiSolidInbox /></button>
                                            <button className={styles.delete}><FaTrash /></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Sasuke</td>
                                        <td>Sasuke@example.com</td>
                                        <td>3.000.000.000 VND</td>
                                        <td>
                                            <button className={styles.edit}><BiSolidInbox /></button>
                                            <button className={styles.delete}><FaTrash /></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AdminUser;