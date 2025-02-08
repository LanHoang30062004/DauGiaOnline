import { useState } from "react";
import "./login.css"
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = "fake";
        login(token) ; 
        navigate("/home") ; 
    }

    return (
        <>
            <div>
                <header>
                    <div className="header-content">
                        <img src="/Logo.jpg" alt="Logo" className="header-logo" />
                        <h1 className="header-title">Login</h1>
                    </div>
                </header>
                <div className="container">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit} className="post">
                        <div className="khung">
                            <input type="email" className="Email" required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span></span>
                            <label>Email</label>
                        </div>
                        <div className="khung">
                            <input type="password" required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
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
        </>
    )
}
export default Login; 