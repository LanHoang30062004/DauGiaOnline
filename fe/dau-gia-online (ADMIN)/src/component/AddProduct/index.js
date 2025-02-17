import styles from "./addProduct.module.css";
import { FaUsers } from "react-icons/fa";
import { MdInventory2 } from "react-icons/md";
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaBoxArchive } from "react-icons/fa6";
import React, { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UpdateProduct() {

    const navigate = useNavigate();
    const [prod, setProd] = useState(
        {
            id: 0,
            name: "",
            price: 0,
            time: "",
            category: "",
        }
    );
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:2000/products");
            setProducts(response.data);
        } catch (error) {
            console.error("Lỗi: ", error);
        }
    };
    useEffect(() => {
        fetchProducts();
    }, []);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProd((prevProd) => ({
            ...prevProd,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        console.log("Files selected:", files);
        setProd((prevProd) => ({
            ...prevProd,
        }));
    };

    const handleUpload = async (e) => {
        e.preventDefault();

        const newId =  Number(products[products.length - 1].id) + 1;

        const formData = new FormData();
        formData.append("id", newId);
        formData.append("name", prod.name);
        formData.append("price", Number(prod.price));
        formData.append("time", prod.time);
        formData.append("category", prod.category);
        console.log("Uploading product:", prod);

        try {
            const response = await axios.post("http://localhost:2000/products", formData, {
                headers: { "Content-Type": "application/json" },
            });
            console.log("Upload thành công:", response.data);
            alert("Sản phẩm đã được thêm thành công!");
        } catch (error) {
            console.error("Lỗi khi upload sản phẩm:", error);
            alert("Đã xảy ra lỗi khi upload sản phẩm.");
        }
    };

    const handleRefresh = () => {
        setProd((prevProd) => ({
            ...prevProd,
            img: [],
        }));

        document.getElementById("fileInput").value = "";
        console.log(prod.img);

    };

    const handleCancel = () => {
        alert("Add product canceled");
        window.location.reload();
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
                        <li className={`${styles.menuItem} ${styles.active}`} onClick={handleToProducts}>
                            <span className={styles.icon}><FaBoxArchive /></span>
                            <span className={styles.text}>Products</span>
                        </li>
                        <li className={styles.menuItem} onClick={handleToPayHistory}>
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
                    <div className={styles.title}>ADD PRODUCTS</div>
                    <div className={styles.contentBox}>
                        <form className={styles.form__updateProduct} type="text" action="" encType="multipart/form-data" method="POST" onSubmit={handleUpload}>
                            <div className={styles.inforBox}>
                                <div className={styles.field}>
                                    <input type="text" id="name" name="name" placeholder="Name product" onChange={handleChange} autoComplete="off" />
                                </div>
                                <div className={styles.field}>
                                    <input type="text" id="price" name="price" placeholder="Starting price" onChange={handleChange} autoComplete="off" />
                                </div>

                                <div className={styles.field}>
                                    <input type="text" id="time" name="time" placeholder="Auction time" onChange={handleChange} autoComplete="off" />
                                </div>
                                <div className={styles.cateField}>
                                    <label for="category">Category:</label>
                                    <select className={styles.cateSelect} id="cate" name="category" onChange={handleChange}>
                                        <option value="disabled selected"></option>
                                        <option value="bag">Bag</option>
                                        <option value="watch">Watch</option>
                                        <option value="antique">Antique</option>
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
                                        <input className={styles.uploadImg} type="file" multiple id="fileInput" />
                                    </label>
                                </form>
                            </div>
                            <div className={styles.refreBtn}  >Refresh</div>
                        </div>
                    </div>



                    <div className={styles.btn}>
                        <div className={styles.cancelBtn} onClick={handleCancel}>Cancel</div>
                        <div className={styles.uploadBtn} onClick={handleUpload} >Upload</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UpdateProduct;
