import styles from './register.module.css';
function Register() {
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
                <form>
                  <div className="row">
                    {/* Bên trái */}
                    <div className="col-md-6">
                      <div className={styles.formGroup}>
                        <input type="email" className={`form-control ${styles.inputEmail}`} placeholder="Email" />
                      </div>
                      <div className={styles.formGroup}>
                        <input type="password" className={`form-control ${styles.inputPassword}`} placeholder="Password" />
                      </div>
                      <div className={styles.formGroup}>
                        <input type="password" className={`form-control ${styles.inputRepassword}`} placeholder="Re-enter your password" />
                      </div>
                    </div>
                    {/* Bên phải */}
                    <div className="col-md-6">
                      <div className={styles.formGroup}>
                        <input type="text" className={`form-control ${styles.inputFullname}`} placeholder="Full name" />
                      </div>
                      <div className={styles.formGroup}>
                        <input type="date" className={`form-control ${styles.inputDate}`} placeholder="Date" />
                      </div>
                      <div className={styles.formGroup}>
                        <input type="text" className={`form-control ${styles.inputAddress}`} placeholder="Address" />
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
                      Back to Login? <a href="#"> Login </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
