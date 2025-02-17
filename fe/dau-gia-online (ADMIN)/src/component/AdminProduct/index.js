import styles from "./adminproduct.module.css"
import { FaUsers } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";
import { BiSolidInbox } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function AdminProduct() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:2000/products")
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((err) => console.log(err))
    }, [])

    const handleToUsers = () => {
        navigate("/admin-user");
    };
    const handleToProducts = () => {
        navigate("/admin-product");
    };
    const handleToPayHistory = () => {
        navigate("/transaction-history");
    };
    const handleToAddProduct = () => {
        navigate("/add-product");
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
                            <li className={styles.menuItem} onClick={handleToUsers}>
                                <span className={styles.icon}><FaUsers /></span>
                                <span className={styles.text}>Users</span>
                            </li>
                            <li className={styles.menuItem + " " + styles.active}  onClick={handleToProducts}>
                                <span className={styles.icon}><FaBoxArchive /></span>
                                <span className={styles.text}>Products</span>
                            </li>
                            <li className={styles.menuItem} onClick={handleToPayHistory}>
                                <span className={styles.icon}><FaMoneyCheckDollar /></span>
                                <span className={styles.text}>Payment History</span>
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
                            <input type="text" placeholder="Search Products" />
                            <button className={styles.addProductIcon} onClick={handleToAddProduct}><IoMdAdd /></button>
                        </div>

                        <div className={styles.scrollableDiv}>
                            <table className={styles.userTable}>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>NAME</th>
                                        <th>CATEGORIES</th>
                                        <th>PRICE</th>
                                        <th>TIME</th>
                                        <th>ACTIONS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((p)  =>
                                    <tr>
                                        <td>{p.id}</td>
                                        <td>{p.name}</td>
                                        <td>{p.category}</td>
                                        <td>{p.price}</td>
                                        <td>{p.time}</td>
                                        <td>
                                            <button onClick={() => navigate(`/update-product/${p.id}`)} className={styles.edit}><BiSolidInbox /></button>
                                            <button className={styles.delete}><FaTrash /></button>
                                        </td>
                                    </tr>
                                    )}
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