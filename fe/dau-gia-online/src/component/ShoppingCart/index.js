import { useNavigate } from "react-router-dom";
import styles from "./shoppingCart.module.css"
import { CiDeliveryTruck } from "react-icons/ci";

function ShoppingCart() {
    const navigate = useNavigate(); 
    return (
        <>
            <div className={styles.container}>
                <div className={styles.backgroundCart}>
                    <div className={styles.shoppingCart}>
                        <h1>SHOPPING CART</h1>
                        <div className={styles.cartHeader}>
                            <div>Products</div>
                            <div>Amount</div>
                            <div>Quantity</div>
                            <div>Delete</div>
                        </div>
                        <div className={styles.backgroundProduct}>
                            <div className={styles.noProduct} onClick= {() => navigate("/payment/1")}>
                                <div className={styles.cartItem}>
                                    <div className={styles.productInfo}>
                                        <img
                                            src={process.env.PUBLIC_URL + "/MainImage.jpg"}
                                            alt="Air Force 1 Low x Louis Vuitton"
                                        />
                                        <p>Air Force 1 Low x Louis Vuitton ‘Metallic Gold’</p>
                                    </div>
                                    <div className={styles.price}>72 VND</div>
                                    <div className={styles.quantity}>1</div>
                                    <div className={styles.delete}>
                                        <button>&#128465;</button>
                                    </div>
                                </div>

                                <div className={styles.shippingFee}>
                                    <div className={styles.icon}>
                                        <CiDeliveryTruck />
                                    </div>
                                    <span>Shipping fee 50.000 VND</span>
                                </div>
                            </div>

                            <div className={styles.noProduct}>
                                <div className={styles.cartItem}>
                                    <div className={styles.productInfo}>
                                        <img src={process.env.PUBLIC_URL + "/prod-5.png"} alt="Cheristie" />
                                        <p>Cheristie</p>
                                    </div>
                                    <div className={styles.price}>23.000.000.000 VND</div>
                                    <div className={styles.quantity}>1</div>
                                    <div className={styles.delete}>
                                        <button>&#128465;</button>
                                    </div>
                                </div>

                                <div className={styles.shippingFee}>
                                    <div className={styles.icon}>
                                        <CiDeliveryTruck />
                                    </div>
                                    <span>Shipping fee 50.000 VND</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default ShoppingCart; 