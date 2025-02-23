import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './updateProduct.module.css';
import { FaUsers, FaBoxArchive, FaMoneyCheckDollar } from 'react-icons/fa6';

function UpdateProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: '',
        price: '',
        time: '',
        category: '',
        image: null
    });
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:2000/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.error('Error fetching product data', error));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "price") {
            // Xóa timeout trước đó để tránh kiểm tra nhiều lần khi nhập nhanh
            clearTimeout(window.priceValidationTimeout);

            window.priceValidationTimeout = setTimeout(() => {
                if (!/^\d*\.?\d*$/.test(value) || Number(value) < 0) {
                    toast.error('Please enter a valid positive number!', {
                        position: 'bottom-right',
                        autoClose: 1000
                    });
                }
            }, 700);

            // Nếu giá trị không hợp lệ, không cập nhật state
            if (!/^\d*\.?\d*$/.test(value) || Number(value) < 0) return;
        }

        setProduct(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setProduct(prev => ({ ...prev, image: file }));
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        if (!product.name || !product.price || !product.time || !product.category) {
            toast.error('All fields must be filled out!', {
                position: 'bottom-right',
                autoClose: 1500
            });
            return;
        }
        setShowModal(true);
    };

    const confirmChange = () => {
        if (!/^\d*\.?\d*$/.test(product.price) || Number(product.price) < 0) {
            toast.error('Price must be a valid positive number!', {
                position: 'bottom-right',
                autoClose: 1100
            });
            return;
        }

        axios.put(`http://localhost:2000/products/${id}`, product)
            .then(() => {
                toast.success('Product information updated successfully!', {
                    position: 'bottom-right',
                    autoClose: 1000,
                    onClose: () => navigate('/admin-product')
                });
            })
            .catch(error => {
                console.error('Error updating product', error);
                toast.error('Failed to update product.', {
                    position: 'bottom-right',
                    autoClose: 1100
                });
            });
        setShowModal(false);
    };

    const cancelChange = () => setShowModal(false);
    const handleCancel = () => {
        toast.error('Update Canceled', {
            position: 'bottom-right',
            autoClose: 1100,
            onClose: () => navigate("/admin-product")
        });
    };

    return (
        <div className={styles.ui}>
            <div className={styles.sidebar}>
                <div className={styles.logo}><h1>ADMIN</h1></div>
                <ul className={styles.menu}>
                    <li className={styles.menuItem} onClick={() => navigate("/admin-user")}>
                        <FaUsers className={styles.icon} /><span>Users</span>
                    </li>
                    <li className={`${styles.menuItem} ${styles.active}`} onClick={() => navigate("/admin-product")}>
                        <FaBoxArchive className={styles.icon} /><span>Products</span>
                    </li>
                    <li className={styles.menuItem} onClick={() => navigate("/transaction-history")}>
                        <FaMoneyCheckDollar className={styles.icon} /><span>Payment History</span>
                    </li>
                </ul>
                <div className={styles.sidebarUser} onClick={() => navigate("/")}>
                    <img src="/Megan Fox-avatar.jpg" alt="User Avatar" className={styles.avatar} />
                    <div className={styles.username}>Megan Fox</div>
                </div>
            </div>

            <div className={styles.mainBox}>
                <div className={styles.title}>UPDATE PRODUCTS</div>
                <div className={styles.contentBox}>
                    <form className={styles.form__updateProduct} onSubmit={handleUpdate}>
                        <div className={styles.inforBox}>
                            <div className={styles.field}>
                                <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Product Name" autoComplete="off" />
                            </div>
                            <div className={styles.field}>
                                <input type="text" name="price" value={product.price} onChange={handleChange} placeholder="Price" autoComplete="off" />
                            </div>
                            <div className={styles.field}>
                                <input type="datetime-local" name="time" value={product.time} onChange={handleChange} />
                            </div>
                            <div className={styles.cateField}>
                                <label>Category:</label>
                                <select name="category" value={product.category} onChange={handleChange}>
                                    <option value="">Select</option>
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
                            <label className={styles.fileUpload}>
                                +
                                <input type="file" onChange={handleFileChange} />
                            </label>
                        </div>
                    </div>
                </div>

                <div className={styles.btn}>
                    <div className={styles.cancelBtn} onClick={handleCancel}>Cancel</div>
                    <button type="button" className={styles.uploadBtn} onClick={handleUpdate}>Upload</button>
                </div>
            </div>

            {showModal && (
                <div className={styles.notificationAlert}>
                    <div className={styles.notification}>
                        <p>Are you sure you want to change the information?</p>
                        <div className={styles.notificationButton}>
                            <button className={styles.btnConfirm} onClick={confirmChange}>Confirm</button>
                            <button className={styles.btnCancel} onClick={cancelChange}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}

            <ToastContainer />
        </div>
    );
}

export default UpdateProduct;
