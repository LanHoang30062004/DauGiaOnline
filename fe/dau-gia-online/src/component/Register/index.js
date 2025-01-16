import React from 'react';
import './register.css';

function Register() {
  return (
    <div className="d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center" style={{ margin: '20px' }}>
          <div className="col-lg-6 col-md-8 register-box">
            <div className="col-lg-12 register-title">
              Register
              <div className="register-line"></div>
            </div>
            <div className="col-lg-12 register-form">
              <form>
                <div className="row">
                  {/* Bên trái */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control" placeholder="Re-enter your password" />
                    </div>
                  </div>
                  {/* Bên phải */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Full name" />
                    </div>
                    <div className="form-group">
                      <input type="date" className="form-control" placeholder="Date" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Address" />
                    </div>
                  </div>
                </div>
                <div className="col-12 login-btm login-button justify-content-center d-flex">
                  <button type="submit" className="btn-outline-primary">Register</button>
                </div>
                <div className="login-link text-center mt-3">
                  <p>
                    Back to Login? <a href="#">Login</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
