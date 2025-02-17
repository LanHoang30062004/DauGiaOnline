import styles from "./updateUser.module.css";
import { FaUsers } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const UpdateUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    date: "",
    address: "",
    balance: ""
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:2000/users/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data", error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const confirmChange = () => {
    axios
      .put(`http://localhost:2000/users/${id}`, user)
      .then(() => {
        toast.success("Your information has been successfully updated!", {
          position: "bottom-right",
          autoClose: 1000,
          onClose : () => navigate("/admin-user")
        });
        
      })
      .catch((error) => {
        console.error("error updating user", error);
      });
    setShowModal(false);
  };

  const cancelChange = () => {
    setShowModal(false);
  };

  const handleCancel = () => {
    alert("Update canceled");
    navigate("/admin-users");
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
    <div className={styles.app}>
      <div className={styles.sidebar}>
        <div className={styles.logo}>
          <h1>ADMIN</h1>
        </div>
        <ul className={styles.menu}>
          <li className={styles.menuItem + " " + styles.active} onClick={handleToUsers}>
            <span className={styles.icon}>
              <FaUsers />
            </span>
            <span className={styles.text}>Users</span>
          </li>
          <li className={styles.menuItem} onClick={handleToProducts}>
            <span className={styles.icon}>
              <FaBoxArchive />
            </span>
            <span className={styles.text}>Products</span>
          </li>
          <li className={styles.menuItem} onClick={handleToPayHistory}>
            <span className={styles.icon}>
              <FaMoneyCheckDollar />
            </span>
            <span className={styles.text}>Payment History</span>
          </li>
        </ul>
        <div className={styles.sidebarUser} onClick={handleToLogOut}>
          <img
            src="/Megan Fox-avatar.jpg"
            alt="User Avatar"
            className={styles.avatar}
          />
          <p className={styles.username}>Megan Fox</p>
        </div>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <h1>UPDATE USERS</h1>
        </div>
        <div className={styles.userUpdate}>
          <form className="form__updateUser" onSubmit={handleUpdate}>
            <div className={styles.userDetails}>
              <div className={styles.userColumn}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={user.address}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="date">Date of Birth</label>
                  <input
                    type="text"
                    id="date"
                    name="date"
                    value={user.date}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={styles.userColumn}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="balance">Balance</label>
                  <input
                    type="text"
                    id="balance"
                    name="balance"
                    value={user.balance}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className={styles.userActions}>
              <button type="button" onClick={handleCancel}>Cancel</button>
              <button type="submit">Update</button>
            </div>
          </form>

          {showModal && (
            <div className={styles.notificationAlert}>
              <div className={styles.notification}>
                <p>Are you sure you want to update the information?</p>
                <div className={styles.notificationButton}>
                  <button className={styles.btnConfirm} onClick={confirmChange}>Confirm</button>
                  <button className={styles.btnCancel} onClick={cancelChange}>Cancel</button>
                </div>
              </div>
            </div>
          )}
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;