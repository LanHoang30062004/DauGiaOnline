import Footer from "../../default/Footer";
import Header from "../../default/Header";
import "./style.css"

function MyProfile () {
    return (
        <>
           <Header/>
      <div className="container">
        <h1>My Profile</h1>
        <p>Manage profile information to keep your account secure</p>

        <div className="content">
          <div className="form-section">
            <div className="form-profile">
              <label htmlFor="fullname">Full name</label>
              <input type="text" id="full-name" value="Mai Hoàng Lân" />
            </div>

            <div className="form-profile">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                value="84 Mẹ Suốt, Hòa Khánh Nam, Liên Chiểu, Đà Nẵng"
              />
            </div>

            <div className="form-profile">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" value="lanmaihoang@gmail.com" />
            </div>

            <div className="form-profile">
              <label htmlFor="dob">Date of birth</label>
              <input type="date" id="dob" value="2004-06-30" />
            </div>
          </div>

          <div className="profile-picture-section">
            <div className="profile-picture">
              <img src="647bc024abc775992cd6.png" alt="Profile Picture" />
              <button>Select Picture</button>
            </div>
          </div>
        </div>

        <button className="btn-change">Change</button>
      </div>
           <Footer/>        
        </>
    )
}
export default MyProfile ; 