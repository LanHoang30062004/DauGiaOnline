import styles from "./updateProduct.module.css";
import { FaUsers } from "react-icons/fa";
import { MdInventory2 } from "react-icons/md";
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { FaBoxArchive } from "react-icons/fa6";
import React, { useState } from "react";
function UpdateProduct() {
    return (
        <>
            <div className={styles.ui}>
                <div className={styles.sidebar}>
                    <div className={styles.logo}>
                        <h1>ADMIN</h1>
                    </div>
                    <ul className={styles.menu}>
                        <li className={styles.menuItem}>
                            <span className={styles.icon}><FaUsers /></span>
                            <span className={styles.text}>Users</span>
                        </li>
                        <li className={`${styles.menuItem} ${styles.active}`}>
                            <span className={styles.icon}><FaBoxArchive /></span>
                            <span className={styles.text}>Products</span>
                        </li>
                    </ul>
                    <div className={styles.sidebarUser}>
                        <img src="/Megan Fox-avatar.jpg" alt="User Avatar" className={styles.avatar} />
                        <div  className={styles.username}>Megan Fox</div>
                    </div>
                </div>
                <div className={styles.mainBox}>
                    <div className={styles.title}>UPDATE PRODUCTS</div>
                    <div className={styles.contentBox}>
                        <form className={styles.form__updateProduct} type="text" action="" method="POST">
                            <div className={styles.inforBox}>
                                <div className={styles.field}>
                                    <input type="text" id="name" name="name" value="Cheristie" />
                                </div>
                                <div className={styles.field}>
                                    <input type="text" id="price" name="price" value="23.000 VND" />
                                </div>

                                <div className={styles.field}>
                                    <input type="text" id="time" name="time" value="12/12/2025" />
                                </div>
                                <div className={styles.cateField}>
                                    <label for="cate">Category:</label>
                                    <select className={styles.cateSelect} id="cate" name="cate">
                                        <option value="disabled selected"></option>
                                        <option value="bag">Bag</option>
                                        <option value="watch">Watch</option>
                                        <option value="antique" selected>Antique</option>
                                        <option value="sneakers">Sneakers</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                        <div className={styles.imageBox}>
                            <div className={styles.imgArea}>
                                <form action="" method="POST">
                                    <label className={styles.fileUpload}>
                                        +
                                        <input className={styles.uploadImg} type="file" id="fileInput"/>
                                    </label>
                                </form>
                            </div>
                            <a className={styles.refreBtn} href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online">Refresh</a>
                        </div>
                    </div>
                    <div className={styles.btn}>
                        <a className={styles.cancelBtn} >Cancel</a>
                        <a className={styles.uploadBtn} >Upload</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UpdateProduct;
