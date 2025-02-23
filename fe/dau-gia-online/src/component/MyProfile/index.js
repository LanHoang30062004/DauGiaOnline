import styles from "./myProfile.module.css"
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyProfile() {
    const [showModal, setShowModal] = useState(false);

    const handleChange = () => {
        setShowModal(true);
    };

    const confirmChange = () => {
        setShowModal(false);
        toast.success("Your information has been successfully updated!", {
            position: "bottom-right",
            autoClose: 1500
        });
    };

    const cancelChange = () => {
        setShowModal(false);
    };

    return (
        <>
            
            <div className={styles.myProfileContainer}>
                <h1 className={styles.h1}>My Profile</h1>
                <p className={styles.p}>Manage profile information to keep your account secure</p>
                <div className={styles.line}></div>

                <div className={styles.content}>
                    <div className={styles.formSection}>
                        <div className={styles.formProfile}>
                            <label htmlFor="fullname">Full name</label>
                            <input type="text" id="fullName" placeholder="Mai Hoàng Lân" />
                        </div>

                        <div className={styles.formProfile}>
                            <label htmlFor="address">Address</label>
                            <input type="text" id="address" placeholder="84 Mẹ Suốt, Hòa Khánh Nam, Liên Chiểu, Đà Nẵng" />
                        </div>

                        <div className={styles.formProfile}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="lanmaihoang@gmail.com" />
                        </div>

                        <div className={styles.formProfile}>
                            <label htmlFor="dob">Date of birth</label>
                            <input type="date" id="dob" placeholder="2004-06-30" />
                        </div>
                    </div>

                    <div className={styles.lineDoc}></div>

                    <div className={styles.profilePictureSection}>
                        <div className={styles.profilePicture}>
                            <img src={process.env.PUBLIC_URL + "/GuestImage.jpg"} alt="Profile Picture" />
                            <div className={styles.customFileUpload}>
                                <input type="file" id="fileUpload" className={styles.customFileInput} />
                                <button className={styles.btnSelect}>Select Picture</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.btChange}>
                    <button type="submit" className={styles.btnChange} onClick={handleChange}>Change</button>
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
        </>
    )
}
export default MyProfile;
