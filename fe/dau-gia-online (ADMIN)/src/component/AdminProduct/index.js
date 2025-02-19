import styles from "./adminproduct.module.css";
import { FaUsers } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";
import { BiSolidInbox } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function AdminProduct() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:2000/products")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDeleteProduct = (id) => {
    setProductToDelete(id);
    setShowModal(true);
};

  const confirmChange = (id) => {
    axios.delete(`http://localhost:2000/products/${productToDelete}`)
      .then(() => {
        setData(data.filter((product) => product.id !== productToDelete));
        setShowModal(false);
        toast.success("Product has been successfully deleted!", {
          position: "bottom-right",
          autoClose: 1500,
        });
      })
      .catch((err) => console.log(err));
  };


  const cancelChange = () => {
    setShowModal(false);
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
  const handleToAddProduct = () => {
    navigate("/add-product");
  };
  const handleToLogOut = () => {   
    navigate("/");
  };

  return (
    <>
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
          <li className={styles.menuItem + " " + styles.active} onClick={handleToProducts}>
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
          <p className={styles.username}>Megan Fox</p>
        </div>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <h1>PRODUCTS</h1>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <h1>{data.length}</h1>
            <h1>Total Products</h1>
          </div>
        </div>

        <div className={styles.searchBar}>
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
              {data.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>{product.time}</td>
                  <td>
                    <button onClick={() => navigate(`/update-product/${product.id}`)} className={styles.edit}><BiSolidInbox /></button>
                    <button onClick={() => handleDeleteProduct(product.id)} className={styles.delete}><FaTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    {showModal && (
                <div className={styles.notificationAlert}>
                    <div className={styles.notification}>
                        <p>Are you sure you want to delete this product?</p>
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

export default AdminProduct;
