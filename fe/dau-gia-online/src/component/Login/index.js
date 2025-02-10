import { useState } from "react";
import styles from "./login.module.css"
import { useNavigate } from "react-router-dom";
import { url } from "../../util/Url";
import axios  from 'axios';
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(url + "users/login" , {
            "email" : email , 
            "password" : password 
        })
        .then((res) => {
            console.log(res) ; 
            console.log(res.data.data)
            navigate("/home") ; 
        })
        .catch((err) => console.log(err))
      

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
                        <form onSubmit={handleSubmit} className="post">
                            <div className={styles.khung}>
                                <input type="email" required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <span></span>
                                <label>Email</label>
                            </div>
                            <div className={styles.khung}>
                                <input type="password" required
                                    value={password}
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