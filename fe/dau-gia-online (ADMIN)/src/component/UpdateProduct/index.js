import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './updateProduct.module.css';
import { FaUsers } from 'react-icons/fa';
import { FaBoxArchive } from 'react-icons/fa6';
import { FaMoneyCheckDollar } from 'react-icons/fa6';

function UpdateProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: '',
        price: '',
        time: '',
        category: ''
    });
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:2000/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.error('Error fetching product data', error));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prev => ({ ...prev, [name]: value }));
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
        axios.put(`http://localhost:2000/products/${id}`, product)
            .then(() => {
                toast.success('Product information updated successfully!', {
                    position: 'bottom-right',
                    autoClose: 1500,
                    onClose : () => navigate('/admin-products')
                });
            })
            .catch(error => {
                console.error('Error updating product', error);
                toast.error('Failed to update product.', {
                    position: 'bottom-right',
                    autoClose: 1500
                });
            });
        setShowModal(false);
    };

    const cancelChange = () => {
        setShowModal(false);
    };

    const handleCancel = () => {
        toast.error('Update Canceled', {
            position: 'bottom-right',
            autoClose: 1500
        });
        navigate("/admin-products");
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

    return (
        <div className={styles.ui}>
            <div className={styles.sidebar}>
                <div className={styles.logo}><h1>ADMIN</h1></div>
                <ul className={styles.menu}>
                    <li className={styles.menuItem} onClick={handleToUsers}><FaUsers /><span>Users</span></li>
                    <li className={`${styles.menuItem} ${styles.active}`} onClick={handleToProducts}><FaBoxArchive /><span>Products</span></li>
                    <li className={styles.menuItem} onClick={handleToPayHistory}><FaMoneyCheckDollar /><span>Payment History</span></li>
                </ul>
                <div className={styles.sidebarUser}>
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
                                <input type="text" id="name" name="name" value={product.name} onChange={handleChange} placeholder="Product Name" />
                            </div>
                            <div className={styles.field}>
                                <input type="text" id="price" name="price" value={product.price} onChange={handleChange} placeholder="Price" />
                            </div>
                            <div className={styles.field}>
                                <input type="text" id="time" name="time" value={product.time} onChange={handleChange} placeholder="Auction Time" />
                            </div>
                            <div className={styles.cateField}>
                                <label htmlFor="cate">Category:</label>
                                <select className={styles.cateSelect} id="cate" name="category" value={product.category} onChange={handleChange}>
                                    <option value="">Select</option>
                                    <option value="bag">Bag</option>
                                    <option value="watch">Watch</option>
                                    <option value="antique">Antique</option>
                                    <option value="sneakers">Sneakers</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.btn}>
                            <button type="button" className={styles.cancelBtn} onClick={handleCancel}>Cancel</button>
                            <button type="submit" className={styles.uploadBtn}>Update</button>
                        </div>
                    </form>
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