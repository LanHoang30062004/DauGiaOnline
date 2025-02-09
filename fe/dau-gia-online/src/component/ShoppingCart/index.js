import "./shoppingCart.css"
import { CiDeliveryTruck } from "react-icons/ci";
import Header from './../../default/Header';
import Footer from './../../default/Footer';
function ShoppingCart() {
    return (
        <>
            <Header />
            <div className="container">
                <div className="background-cart">
                    <div className="shopping-cart">
                        <h1>SHOPPING CART</h1>
                        <div className="cart-header">
                            <div>Products</div>
                            <div>Amount</div>
                            <div>Quantity</div>
                            <div>Delete</div>
                        </div>
                        <div className="background-product">
                            <div className="No-product">
                                <div className="cart-item">
                                    <div className="product-info">
                                        <img src={process.env.PUBLIC_URL + "/MainImage.jpg"} alt="Air Force 1 Low x Louis Vuitton" />
                                        <p>Air Force 1 Low x Louis Vuitton ‘Metallic Gold’</p>
                                    </div>
                                    <div className="price">725.000.000 VND</div>
                                    <div className="quantity">1</div>
                                    <div className="delete">
                                        <button>&#128465;</button>
                                    </div>
                                </div>

                                <div className="shipping-fee">
                                    <div className="icon"><CiDeliveryTruck /></div>
                                    <span>Shipping fee 50.000 VND</span>
                                </div>
                            </div>

                            <div className="No-product">
                                <div className="cart-item">
                                    <div className="product-info">
                                        <img src={process.env.PUBLIC_URL + "/prod-5.png"} alt="Cheristie" />
                                        <p>Cheristie</p>
                                    </div>
                                    <div className="price">23.000.000.000 VND</div>
                                    <div className="quantity">1</div>
                                    <div className="delete">
                                        <button>&#128465;</button>
                                    </div>
                                </div>

                                <div className="shipping-fee">
                                    <div className="icon"><CiDeliveryTruck /></div>
                                    <span>Shipping fee 50.000 VND</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default ShoppingCart; 