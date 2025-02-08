import Footer from "../../default/Footer";
import Header from "../../default/Header";
import "./style.css"
function AddProduct() {
    return (
        <>
            <div class="ui">
                <div class="sel-box">
                    <div class="logo">
                    <img src={process.env.PUBLIC_URL + "/logo-admin.png"} alt="" />
                    </div>
                    <div class="user"></div>
                    <div class="product"></div>
                    <div class="profile"></div>
                </div>
                <div class="main-box">
                    <div class="title">ADD PRODUCTS</div>
                    <div class="infor-box">
                        <div class="name"></div>
                        <div class="price"></div>
                        <div class="time"></div>
                        <div class="cate"></div>
                    </div>
                    <div class="image-box">
                        <div class="img"></div>
                        <div class="refre-btn"></div>
                    </div>
                    <div class="btn">
                        <div class="cancel-btn"></div>
                        <div class="upload-btn"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddProduct; 