import "./style.css"
import { FaUsers } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";
import { BiSolidInbox } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
function AdminProduct() {
    return (
        <>
            <div>
                <div className="app">
                    <div className="sidebar">
                        <div className="logo">
                            <h1>ADMIN</h1>
                        </div>
                        <ul className="menu">
                            <li className="menu-item">
                                <span className="icon"><FaUsers /></span>
                                <span className="text">Users</span>
                            </li>
                            <li className="menu-item active">
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
                            <h1>PRODUCTS</h1>
                        </div>
                        <div className="stats">
                            <div className="stat">
                                <h1>100</h1>
                                <h1>Total Products</h1>
                            </div>
                        </div>
                        
                            <div class="search-bar">
                                <input type="text" placeholder="Search Products"/>
                                <button className="add-product-icon"><IoMdAdd /></button>
                            </div>
                    
                        <div className="scrollable-div">
                            <table className="user-table">
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
                                            <button className="edit"><BiSolidInbox /></button>
                                            <button className="delete"><FaTrash /></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Cheristie</td>
                                        <td>Antique</td>
                                        <td>23.000.000.000 VND</td>
                                        <td>15:12</td>
                                        <td>
                                            <button className="edit"><BiSolidInbox /></button>
                                            <button className="delete"><FaTrash /></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Ming Dynasty water vase</td>
                                        <td>Antique</td>
                                        <td>12.000.000.000 VND</td>
                                        <td>21:13</td>
                                        <td>
                                            <button className="edit"><BiSolidInbox /></button>
                                            <button className="delete"><FaTrash /></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Himalaya Crocodile Retourné Kelly</td>
                                        <td>Bag</td>
                                        <td>10.000.000.000 VND</td>
                                        <td>15:02</td>
                                        <td>
                                            <button className="edit"><BiSolidInbox /></button>
                                            <button className="delete"><FaTrash /></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Hermès Sellier Mosaique Kelly</td>
                                        <td>Bag</td>
                                        <td>8.600.000.000  VND</td>
                                        <td>15:02</td>
                                        <td>
                                            <button className="edit"><BiSolidInbox /></button>
                                            <button className="delete"><FaTrash /></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Faubourg Birkin</td>
                                        <td>Bag</td>
                                        <td>7.800.000.000  VND</td>
                                        <td>02:08</td>
                                        <td>
                                            <button className="edit"><BiSolidInbox /></button>
                                            <button className="delete"><FaTrash /></button>
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