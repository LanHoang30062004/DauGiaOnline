import React, { useState } from "react";
import { IoIosAddCircle, IoIosCall, IoIosCart } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { FaWallet } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";
import { HiSortAscending , HiSortDescending  } from "react-icons/hi";
import { RiDeleteBin2Fill } from "react-icons/ri";
import "./default.scss";

function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleFilterClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="header">
            <div className="header__above">
                <div className="above__content">
                    <ul>
                        <li>
                            <div className="above__phone above__default"><IoIosCall /></div>
                        </li>
                        <li>
                            <div className="above__cart above__default">
                                <IoIosCart />
                            </div>
                        </li>
                        <li>
                            <div className="above__payment above__default">
                                <FaWallet />
                                12$
                            </div>
                        </li>
                        <li>
                            <div className="above__image above__default">
                                <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="Logo" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="header__below">
                <div className="below__content">
                    <div className="below__image">
                        <img src={process.env.PUBLIC_URL + "/Logo.jpg"} alt="Logo" />
                    </div>
                    <div className="below__search">
                        <div className="below__magnifying"><FaMagnifyingGlass /></div>
                        <input placeholder="Tìm kiếm" />
                        <div className="below__filter" onClick={handleFilterClick}>
                            <FaFilter /> Filter
                        </div>
                        {isDropdownOpen && (
                            <div className="dropdown-list">
                               <div className="dropdown-list__left">
                                <p>Phân loại</p>
                                <select>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                               </div>
                               <div className="dropdown-list__center">
                               <p>Loại hàng</p>
                                <select>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                               </div>
                               <div className="dropdown-list__right">
                                <button className="dropdown-list__img"><HiSortAscending /></button>
                                <button className="dropdown-list__img"><HiSortDescending /></button>
                                <button className="dropdown-list__img"><RiDeleteBin2Fill /></button>

                               </div>
                            </div>
                        )}
                    </div>
                    <div className="below__button">Tìm kiếm</div>
                    <div className="s"></div>
                </div>
            </div>
        </div>
    );
}

export default Header;
