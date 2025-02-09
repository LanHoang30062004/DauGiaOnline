import "./ShoppingCart.css"
import { CiDeliveryTruck } from "react-icons/ci";
function ShoppingCart () {
    return (
        <>
            <div class="container">
                <div class="shopping-cart">
                    <h1>SHOPPING CART</h1>
                    <div class="cart-header">
                        <div>Products</div>
                        <div>Amount</div>
                        <div>Quantity</div>
                        <div>Delete</div>
                    </div>

                    <div class="cart-item">
                        <div class="product-info">
                            <img src={process.env.PUBLIC_URL + "/MainImage.jpg"} alt="Air Force 1 Low x Louis Vuitton"/>
                            <p>Air Force 1 Low x Louis Vuitton ‘Metallic Gold’</p>
                        </div>
                        <div class="price">725.000.000 VND</div>
                        <div class="quantity">1</div>
                        <div class="delete">
                            <button>&#128465;</button>
                        </div>
                    </div>

                    <div class="shipping-fee">
                        <div className="icon"><CiDeliveryTruck/></div>
                        <span>Shipping fee 50.000 VND</span>
                    </div>

                    <div class="cart-item">
                        <div class="product-info">
                        <img src={process.env.PUBLIC_URL + "/prod-5.png"} alt="Cheristie"/>
                            <p>Cheristie</p>
                        </div>
                        <div class="price">23.000.000.000 VND</div>
                        <div class="quantity">1</div>
                        <div class="delete">
                            <button>&#128465;</button>
                        </div>
                    </div>

                    <div class="shipping-fee">
                        <div className="icon"><CiDeliveryTruck/></div>
                        <span>Shipping fee 50.000 VND</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ShoppingCart ; 