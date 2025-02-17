import styles from "./transaction.module.css"
import { FaUsers } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaBoxArchive } from "react-icons/fa6";
import { BiSolidInbox } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function TransactionHistory() {
    const navigate = useNavigate();

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
            <div className={styles.ui}>
                <div className={styles.sidebar}>
                    <div className={styles.logo}>
                        <h1>ADMIN</h1>
                    </div>
                    <ul className={styles.menu}>
                        <li className={styles.menuItem} onClick={handleToUsers}>
                            <span className={styles.icon}><FaUsers /></span>
                            <span className={styles.text}>Users</span>
                        </li>
                        <li className={styles.menuItem}     onClick={handleToProducts}>
                            <span className={styles.icon}><FaBoxArchive /></span>
                            <span className={styles.text}>Products</span>
                        </li>
                        <li className={`${styles.menuItem} ${styles.active}`} onClick={handleToPayHistory}>
                            <span className={styles.icon}><FaMoneyCheckDollar /></span>
                            <span className={styles.text}>Payment History</span>
                        </li>
                    </ul>
                    <div className={styles.sidebarUser} onClick={handleToLogOut}>
                        <img src="/Megan Fox-avatar.jpg" alt="User Avatar" className={styles.avatar} />
                        <div className={styles.username}>Megan Fox</div>
                    </div>
                </div>
                <div className={styles.mainBox}>
                    <div className={styles.title}>TRANSACTION HISTORY</div>
                    <div className={styles.contentBox}>
                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <h1 className={styles.infor}>50</h1>
                                <h1 className={styles.infor}>Total Payment</h1>
                            </div>
                            <form action={""} method="get" className={styles.searchForm} >
                                <input className="date" type="date" placeholder="Search by ID or Content" />
                            </form>

                        </div>

                        <form action={""} method="get">
                            <div class={styles.searchBar}>
                                <input type="text" placeholder="Search by ID or Content" />
                                <button className={styles.addProductIcon}><IoMdAdd /></button>
                            </div>
                        </form>


                        <div className={styles.scrollableDiv}>
                            <table className={styles.userTable}>
                                <thead>
                                    <tr>
                                        <th>NO</th>
                                        <th>TRAN ID</th>
                                        <th>EMAIL</th>
                                        <th>FULLNAME</th>
                                        <th>DATE</th>
                                        <th>BALANCE</th>
                                        <th>CONTENT</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>001</td>
                                        <td>bang98</td>
                                        <td>test1@gmail.com</td>
                                        <td>Megan Fox</td>
                                        <td>11/02/2024</td>
                                        <td>8.000.000.000 VND</td>
                                        <td>test 1</td>
                                    </tr>
                                    <tr>
                                        <td>002</td>
                                        <td>ding99</td>
                                        <td>test2@gmail.com</td>
                                        <td>MaiHoangLan</td>
                                        <td>16/03/2024</td>
                                        <td>13.000.000.000 VND</td>
                                        <td>test 2</td>
                                    </tr>
                                    <tr>
                                        <td>003</td>
                                        <td>down35</td>
                                        <td>test3@gmail.com</td>
                                        <td>LeHoaHiep</td>
                                        <td>19/04/2024</td>
                                        <td>14.000 VND</td>
                                        <td>test 3</td>
                                    </tr>
                                    <tr>
                                        <td>004</td>
                                        <td>beer51</td>
                                        <td>test4@gmail.com</td>
                                        <td>TruongCongThanh</td>
                                        <td>23/05/2024</td>
                                        <td>15.000.000.000 VND</td>
                                        <td>test 4</td>
                                    </tr>
                                    <tr>
                                        <td>005</td>
                                        <td>huda74</td>
                                        <td>test5@gmail.com</td>
                                        <td>NamikazeNaruto</td>
                                        <td>30/06/2024</td>
                                        <td>16.000.000 VND</td>
                                        <td>test 5</td>
                                    </tr>
                                    <tr>
                                        <td>006</td>
                                        <td>jack97</td>
                                        <td>test69@gmail.com</td>
                                        <td>LieuNhuYen</td>
                                        <td>15/09/2024</td>
                                        <td>17.000.000.000 VND</td>
                                        <td>test 6</td>
                                    </tr>
                                    <tr>
                                        <td>006</td>
                                        <td>jack97</td>
                                        <td>test69@gmail.com</td>
                                        <td>LieuNhuYen</td>
                                        <td>15/09/2024</td>
                                        <td>17.000.000.000 VND</td>
                                        <td>test 6</td>
                                    </tr>
                                    <tr>
                                        <td>006</td>
                                        <td>jack97</td>
                                        <td>test69@gmail.com</td>
                                        <td>LieuNhuYen</td>
                                        <td>15/09/2024</td>
                                        <td>17.000.000.000 VND</td>
                                        <td>test 6</td>
                                    </tr>
                                    <tr>
                                        <td>006</td>
                                        <td>jack97</td>
                                        <td>test69@gmail.com</td>
                                        <td>LieuNhuYen</td>
                                        <td>15/09/2024</td>
                                        <td>17.000.000.000 VND</td>
                                        <td>test 6</td>
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
export default TransactionHistory