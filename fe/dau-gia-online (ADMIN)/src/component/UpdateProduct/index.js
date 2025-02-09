import "./style.css"
import { FaUsers } from "react-icons/fa";
import { MdInventory2 } from "react-icons/md";
import { FaMagnifyingGlass } from 'react-icons/fa6';
function UpdateProduct() {
    return (
        <>
            <div className="ui">
                <div className="sel-box">
                    <div className="logo">
                        <img src={process.env.PUBLIC_URL + "/logo-admin.png"} alt="" />
                    </div>
                    <div className="user-box">
                        <a className="user-sel" href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online"><a className="icon"><FaUsers /></a>Users</a>
                    </div>
                    <div className="product-box">
                        <a className="product-sel" href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online"> <a className="icon"><MdInventory2 /></a>  Products</a>
                    </div>
                    <div className="profile-box">
                        <a className="profile" href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online"><img src={process.env.PUBLIC_URL + "/megan-fox-avatar.jpg"} alt="" />Megan Fox</a>
                    </div>
                </div>
                <div className="main-box">
                    <div className="title">ADD PRODUCTS</div>
                    <div className="content-box">
                        <div className="infor-box">
                            <div className="name field">
                                <input type="text" id="name" name="name" value="Cheristie" />
                            </div>
                            <div className="price field">
                                <input type="text" id="price" name="price" value="23.000 VND" />
                            </div>

                            <div className="time field">
                                <input type="text" id="time" name="time" value="12/12/2025" />
                            </div>
                            <div className="cate field">
                                <label for="cate">Category:</label>
                                <select id="cate" name="cate">
                                    <option value="disabled selected"></option>
                                    <option value="bag">Bag</option>
                                    <option value="watch">Watch</option>
                                    <option value="antique" selected>Antique</option>
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
export default UpdateProduct; 