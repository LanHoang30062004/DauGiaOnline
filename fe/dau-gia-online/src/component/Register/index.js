import { Link, useNavigate } from 'react-router-dom';
import styles from './register.module.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { url } from '../../util/Url';
import { format } from "date-fns";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password != retypePassword) {
      toast.error("Mật khẩu chưa khớp", {
        position: "bottom-right",
        autoClose: 2000
      })
    }
    else {
      axios.post(url + "users/register", {
        "email": email,
        "password": password,
        "retypePassword": retypePassword,
        "fullName": fullName,
        "address": address,
        "dateOfBirth": format(new Date(date), "dd/MM/yyyy")
      })
        .then((res) => {
          if (res.data.status != 200) {
            toast.warn("Người dùng đã tồn tại", {
              position: "bottom-right",
              autoClose: 2000
            })
          }
          else {
            toast.success("Đăng ký thành công", {
              position: "bottom-right",
              autoClose: 2000,
              onClose: () => navigate("/"),
            });
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error("Có vấn đề trong việc đăng ký", {
            position: "bottom-right",
            autoClose: 2000
          })
        })
    }
  }

  return (
    <div className={styles.backgroundImage}>
      <header>
        <div className={styles.headerContent}>
          <img src="/Logo.jpg" alt="Logo" className={styles.headerLogo} />
          <h1 className={styles.headerTitle}>Register</h1>
        </div>
      </header>
      <div className="d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center" style={{ margin: '20px' }}>
            <div className={`col-lg-6 col-md-8 ${styles.registerBox}`}>
              <div className={`col-lg-12 ${styles.registerTitle}`}>
                Register
                <div className={styles.registerLine}></div>
              </div>
              <div className={`col-lg-12 ${styles.registerForm}`}>
                <form method='post' onSubmit={handleSubmit}>
                  <div className="row">
                    {/* Bên trái */}
                    <div className="col-md-6">
                      <div className={styles.formGroup}>
                        <input required type="email" className={`form-control ${styles.inputEmail}`} placeholder="Email"
                          name={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <input required type="password" className={`form-control ${styles.inputPassword}`} placeholder="Password"
                          name={password}
                          onChange={(e) => setPassword(e.target.value)} />
                      </div>
                      <div className={styles.formGroup}>
                        <input required type="password" className={`form-control ${styles.inputRepassword}`} placeholder="Re-enter your password"
                          name={retypePassword}
                          onChange={(e) => setRetypePassword(e.target.value)}
                        />
                      </div>
                    </div>
                    {/* Bên phải */}
                    <div className="col-md-6">
                      <div className={styles.formGroup}>
                        <input required type="text" className={`form-control ${styles.inputFullname}`} placeholder="Full name"

                          name={fullName}
                          onChange={(e) => setFullName(e.target.value)} />
                      </div>
                      <div className={styles.formGroup}>
                        <input required type="date" className={`form-control ${styles.inputDate}`} placeholder="Date"
                          name={date}
                          onChange={(e) => setDate(e.target.value)}
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <input required type="text" className={`form-control ${styles.inputAddress}`} placeholder="Address"
                          name={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={`col-12 ${styles.loginBtm} ${styles.loginButton} justify-content-center d-flex`}>
                    <button type="submit" className={styles.btnOutlinePrimary}>
                      Register
                    </button>
                  </div>
                  <div className={`${styles.loginLink} text-center mt-3`}>
                    <p>
                      Back to Login? <Link to="/"> Login </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Register;
