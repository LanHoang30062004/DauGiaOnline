import Footer from "../../default/Footer";
import Header from "../../default/Header";
import "./myProfile.css"

function MyProfile () {
    return (
        <>
            <Header/>
            <div className="container">
                <h1>My Profile</h1>
                <p>Manage profile information to keep your account secure</p>
                <div className="line"></div>

                <div className="content">
                    <div className="form-section">
                        <div className="form-profile">
                            <label htmlFor="fullname">Full name</label>
                            <input type="text" id="full-name" placeholder="Mai Hoàng Lân" />
                        </div>

                        <div className="form-profile">
                            <label htmlFor="address">Address</label>
                            <input type="text" id="address" placeholder="84 Mẹ Suốt, Hòa Khánh Nam, Liên Chiểu, Đà Nẵng" />
                        </div>

                        <div className="form-profile">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="lanmaihoang@gmail.com" />
                        </div>

                        <div className="form-profile">
                            <label htmlFor="dob">Date of birth</label>
                            <input type="date" id="dob" placeholder="2004-06-30" />
                        </div>
                    </div>

                    <div className="line-doc"></div>

                    <div className="profile-picture-section">
                        <div className="profile-picture">
                        <img src={process.env.PUBLIC_URL + "/Anh-dai-dien-tam.png"} alt="Profile Picture" />
                            <button>Select Picture</button>
                        </div>
                    </div>
                </div>

                <div className="bt-change">
                    <button type="submit" className="btn-change">Change</button>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default MyProfile ; 