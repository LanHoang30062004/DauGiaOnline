import styles from "./addProduct.module.css";
import { FaUsers } from "react-icons/fa";
import { FaMoneyCheckDollar, FaBoxArchive } from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function UpdateProduct() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [prod, setProd] = useState({
        id: 0,
        name: "",
        price: 0,
        time: "",
        category: "",
    });
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:2000/products");
            setProducts(response.data);
        } catch (error) {
            console.error("Lỗi: ", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        clearTimeout(window.priceValidationTimeout);

        if (name === "price") {
            window.priceValidationTimeout = setTimeout(() => {
                if (!/^\d*\.?\d*$/.test(value) || Number(value) < 0) {
                    toast.error('Please enter a valid number !', {
                        position: 'bottom-right',
                        autoClose: 1000
                    });
                }
            }, 700);
        }

        setProd((prevProd) => ({
            ...prevProd,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        console.log("Files selected:", files);
    };

    const handleShowModal = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    const confirmChange = async () => {
        const newId = Number(products[products.length - 1]?.id || 0) + 1;

        if (!prod.name || !prod.price || !prod.time || !prod.category) {
            toast.error('Please enter complete information', {
                position: 'bottom-right',
                autoClose: 1000
            }); 
            return;}

        const formData = new FormData();
        formData.append("id", newId);
        formData.append("name", prod.name);
        formData.append("price", Number(prod.price));
        formData.append("time", prod.time.replace("T", " "));
        formData.append("category", prod.category);

        try {
            const response = await axios.post("http://localhost:2000/products", formData, {
                headers: { "Content-Type": "application/json" },
            });
            console.log("Upload thành công:", response.data);
            toast.success('Product add successfully!', {
                position: 'bottom-right',
                autoClose: 1000,
                onClose : () => navigate('/admin-product')
            });
        } catch (error) {
            console.error('Error updating product', error);
            toast.error('Failed to update product.', {
                position: 'bottom-right',
                autoClose: 1000
            });
        }

        setShowModal(false);
    };

    const cancelChange = () => {
        setShowModal(false);
    };

    const handleCancel = () => {
        toast.error('Add Product Canceled', {
            position: 'bottom-right',
            autoClose: 1500,
            onClose : () => navigate('/admin-product')
        });
    };

    const handleToUsers = () => navigate("/admin-user");
    const handleToProducts = () => navigate("/admin-product");
    const handleToPayHistory = () => navigate("/transaction-history");
    const handleToLogOut = () => navigate("/");

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
                        <form className={styles.form__updateProduct}>
                            <div className={styles.inforBox}>
                                <div className={styles.field}>
                                    <input type="text" name="name" placeholder="Name product" onChange={handleChange} autoComplete="off" />
                                </div>
                                <div className={styles.field}>
                                    <input type="text" name="price" placeholder="Starting price" onChange={handleChange} autoComplete="off" />
                                </div>
                                <div className={styles.field}>
                                    <input type="datetime-local" name="time" onChange={handleChange} autoComplete="off" />
                                </div>
                                <div className={styles.cateField}>
                                    <label htmlFor="category">Category:</label>
                                    <select className={styles.cateSelect} name="category" onChange={handleChange}>
                                        <option value="" disabled selected></option>
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
                                <form>
                                    <label className={styles.fileUpload}>
                                        +
                                        <input className={styles.uploadImg} type="file" multiple id="fileInput" onChange={handleFileChange} />
                                    </label>
                                </form>
                            </div>
                            <div className={styles.refreBtn}>Refresh</div>
                        </div>
                    </div>

                    <div className={styles.btn}>
                        <div className={styles.cancelBtn} onClick={handleCancel}>Cancel</div>
                        <div className={styles.uploadBtn} onClick={handleShowModal}>Add</div>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className={styles.notificationAlert}>
                    <div className={styles.notification}>
                        <p>Are you sure you want to add the product?</p>
                        <div className={styles.notificationButton}>
                            <button className={styles.btnConfirm} onClick={confirmChange}>Confirm</button>
                            <button className={styles.btnCancel} onClick={cancelChange}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}

            <ToastContainer />
        </>
    );
}

export default UpdateProduct;