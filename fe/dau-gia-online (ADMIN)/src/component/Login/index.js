import "./login.css"
function Login() {
    return (
        <>
            <div>
                <div className="background">
                    <header>
                        <div className="header-content">
                            <img src="/Logo.jpg" alt="Logo" className="header-logo" />
                            <h1 className="header-title">Login</h1>
                        </div>
                    </header>
                    <div className="container">
                        <h1>Login</h1>
                        <form className="post">
                            <div className="khung">
                                <input type="email" className="Email" required />
                                <span></span>
                                <label>Email</label>
                            </div>
                            <div className="khung">
                                <input type="password" required />
                                <span></span>
                                <label>Password</label>
                            </div>
                            <input type="submit" value="Login" />
                            <div className="signup_link">
                                Not a member? <a href="#">Signup</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login; 