import styles from "./payment.module.css"

import { FaTruck } from "react-icons/fa";
function Payment() {
    return (
        <>
            <div className={styles.ui}>
                <div className={styles.textCenter}>
                    <div className={styles.title}>PAYMENT</div>
                </div>
                <div className={styles.frame}>
                    <div className={styles.box1}>
                        <div className={styles.addrBox}>
                            <div className={styles.boxName}>
                                ORDER INFORMATION
                            </div>
                            <input className={styles.inputAddr} type="text" placeholder="Address" />
                        </div>
                        <div className={styles.space}></div>
                        <div className={styles.formBox}>
                            <div className={styles.delivBox}>
                                <div className={styles.formTitle}>Form of delivery</div>
                                <div className={styles.delivContent}><a className={styles.icon}><FaTruck /></a> Delivered to your location</div>
                            </div>
                            <div className={styles.shipBox}>
                                <div className={styles.formTitle}>Shipping by</div>
                                <div className={styles.btnGroup + " " + styles.dFlex + " " + styles.justifyContentCenter} role="group">
                                    <input type="radio" className={styles.btnCheck} name="shipping" id="motorbike" />
                                    <label className={styles.btn + " " + styles.btnOutlineSecondary + " " + styles.mx2} for="motorbike">Motorbike</label>

                                    <input type="radio" className={styles.btnCheck} name="shipping" id="plane" />
                                    <label className={styles.btn + " " + styles.btnOutlineSecondary + " " + styles.mx2} for="plane">Plane</label>

                                    <input type="radio" className={styles.btnCheck} name="shipping" id="van" />
                                    <label className={styles.btn + " " + styles.btnOutlineSecondary + " " + styles.mx2} for="van">Van</label>

                                </div>

                            </div>
                            <div className={styles.dateBox}>
                                <div className={styles.formTitle}>Delivery date</div>
                                <div className={styles.dateSelect}>15/01/2025</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.box2}>
                        <div className={styles.boxTitle}>
                            ORDERS
                        </div>
                        <div className={styles.productName}>
                            Air Force 1 Low x Louis Vuitton 'Metallic Gold'
                        </div>
                        <div className={styles.inforBox}>
                            <div className={styles.priceBox}>
                                <div className={styles.priceItem + " " + styles.font1}>Price of the item: </div>
                                <div className={styles.price + " " + styles.font2}>725.000.000 VND</div>
                            </div>
                            <div className={styles.feeBox}>
                                <div className={styles.shipFee + " " + styles.font1}>Shipping fee: </div>
                                <div className={styles.fee + " " + styles.font2}>50.000 VND</div>
                            </div>
                            <div className={styles.pilici}>
                                <input className={styles.tick} type="checkbox" />
                                <span className={styles.poliAgree}>I agree to all <a href="#" target="_blank" className={styles.poliLink}>operating policies</a></span>
                            </div>
                        </div>
                        <div className={styles.boxFinal}>
                            <div className={styles.finalInfor}>
                                <div className={styles.totalAmount}>Total Amount</div>
                                <div className={styles.totalPrice + " " + styles.font3}>725.050.000 VND</div>
                            </div>
                            <div className={styles.btn}>
                                <button className={styles.agreeBtn}>Agree to ship</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Payment;
