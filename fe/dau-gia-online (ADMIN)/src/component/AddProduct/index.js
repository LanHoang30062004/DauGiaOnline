import "./style.css";
import { FaUsers } from "react-icons/fa";
import { MdInventory2 } from "react-icons/md";
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { FaUsers } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";
import React, { useState } from "react";
function AddProduct() {
    return (
        <>
            <div className="ui">
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
                <div className="main-box">
                    <div className="title">ADD PRODUCTS</div>
                    <div className="content-box">
                        <div className="infor-box">
                            <div className="name field">
                                <input type="text" id="name" name="name" placeholder="Name product" />
                            </div>
                            <div className="price field">
                                <input type="text" id="price" name="price" placeholder="Starting price" />
                            </div>

                            <div className="time field">
                                <input type="text" id="time" name="time" placeholder="Auction time" />
                            </div>
                            <div className="cate field">
                                <label for="cate">Category:</label>
                                <select id="cate" name="cate">
                                    <option value="disabled selected"></option>
                                    <option value="bag">Bag</option>
                                    <option value="watch">Watch</option>
                                    <option value="antique">Antique</option>
                                    <option value="sneakers">Sneakers</option>
                                </select>
                            </div>
                        </div>
                        <div className="image-box">
                            <div className="img-area">
                                <a className="upload-img" href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online">+</a>
                            </div>
                            <a className="refre-btn" href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online">Refresh</a>
                        </div>
                    </div>
                    <div className="btn">
                        <a className="cancel-btn" href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online">Cancel</a>
                        <a className="upload-btn" href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online">Upload</a>
                    </div>
                </div>
            </div >
        </>
    )
}
export default AddProduct;