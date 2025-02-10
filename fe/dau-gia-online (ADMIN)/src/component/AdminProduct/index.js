import styles from "./adminproduct.module.css"
import { FaUsers } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";
import { BiSolidInbox } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
function AdminProduct() {
    return (
        <>
            <div>
                <div className={styles.app}>
                    <div className={styles.sidebar}>
                        <div className={styles.logo}>
                            <h1>ADMIN</h1>
                        </div>
                        <ul className={styles.menu}>
                            <li className={styles.menuItem}>
                                <span className={styles.icon}><FaUsers /></span>
                                <span className={styles.text}>Users</span>
                            </li>
                            <li className={styles.menuItem + " " + styles.active} >
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
                            <h1>PRODUCTS</h1>
                        </div>
                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <h1>100</h1>
                                <h1>Total Products</h1>
                            </div>
                        </div>
                        
                            <div class={styles.searchBar}>
                                <input type="text" placeholder="Search Products"/>
                                <button className={styles.addProductIcon}><IoMdAdd /></button>
                            </div>
                    
                        <div className={styles.scrollableDiv}>
                            <table className={styles.userTable}>
                                <thead>
                                    <tr>
                                        <th>NAME</th>
                                        <th>CATEGORIES</th>
                                        <th>PRICE</th>
                                        <th>TIME</th>
                                        <th>ACTIONS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Pinner Qing Dynasty</td>
                                        <td>Antique</td>
                                        <td>83.000.000.000 VND</td>
                                        <td>03:04</td>
                                        <td>
                                            <button className={styles.edit}><BiSolidInbox /></button>
                                            <button className={styles.delete}><FaTrash /></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Cheristie</td>
                                        <td>Antique</td>
                                        <td>23.000.000.000 VND</td>
                                        <td>15:12</td>
                                        <td>
                                            <button className={styles.edit}><BiSolidInbox /></button>
                                            <button className={styles.delete}><FaTrash /></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Ming Dynasty water vase</td>
                                        <td>Antique</td>
                                        <td>12.000.000.000 VND</td>
                                        <td>21:13</td>
                                        <td>
                                            <button className={styles.edit}><BiSolidInbox /></button>
                                            <button className={styles.delete}><FaTrash /></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Himalaya Crocodile Retourné Kelly</td>
                                        <td>Bag</td>
                                        <td>10.000.000.000 VND</td>
                                        <td>15:02</td>
                                        <td>
                                            <button className={styles.edit}><BiSolidInbox /></button>
                                            <button className={styles.delete}><FaTrash /></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Hermès Sellier Mosaique Kelly</td>
                                        <td>Bag</td>
                                        <td>8.600.000.000  VND</td>
                                        <td>15:02</td>
                                        <td>
                                            <button className={styles.edit}><BiSolidInbox /></button>
                                            <button className={styles.delete}><FaTrash /></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Faubourg Birkin</td>
                                        <td>Bag</td>
                                        <td>7.800.000.000  VND</td>
                                        <td>02:08</td>
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
export default AdminProduct;