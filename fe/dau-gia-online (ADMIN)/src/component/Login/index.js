import { useState } from "react";
import styles from "./login.module.css"
import { useNavigate } from "react-router-dom";
function Login() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        login("sds");
        navigate("/home")
    }
    return (
        <>
            <div>
                <div className={styles.background}>
                    <header>
                        <div className={styles.headerContent}>
                            <img src="/Logo.jpg" alt="Logo" className={styles.headerLogo} />
                            <h1 className={styles.headerTitle}>Login</h1>
                        </div>
                    </header>
                    <div className={styles.container}>
                        <h1>Login</h1>
                        <form className={styles.post}>
                            <div className={styles.khung}>
                                <input type="email" className={styles.Email} required
                                    name={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <span></span>
                                <label>Email</label>
                            </div>
                            <div className={styles.khung}>
                                <input type="password" required
                                    name={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <span></span>
                                <label>Password</label>
                            </div>
                            <input type="submit" value="Login" />
                            <div className={styles.signupLink}>
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