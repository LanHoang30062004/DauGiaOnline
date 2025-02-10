import "./payment.css"

import { FaTruck } from "react-icons/fa";
function Payment() {
    return (
        <>
            <div className="ui">
                <div className=" text-center">
                    <div className="title">PAYMENT</div>
                </div>
                <div className="frame">
                    <div className="box1">
                        <div className="addr-box">
                            <div className="box-name">
                                ORDER INFORMATION
                            </div>
                            <input className="input-addr" type="text" placeholder="Address" />
                        </div>
                        <div className="space"></div>
                        <div className="form-box">
                            <div className="deliv-box">
                                <div className="form-title">Form of delivery</div>
                                <div className="deliv-content"><a className="icon"><FaTruck /></a> Delivered to your location</div>
                            </div>
                            <div className="ship-box ">
                                <div className="form-title">Shipping by</div>
                                <div className="btn-group d-flex justify-content-center" role="group">
                                    <input type="radio" className="btn-check" name="shipping" id="motorbike" />
                                    <label className="btn btn-outline-secondary mx-2" for="motorbike">Motorbike</label>

                                    <input type="radio" className="btn-check" name="shipping" id="plane" />
                                    <label className="btn btn-outline-secondary mx-2" for="plane">Plane</label>

                                    <input type="radio" className="btn-check" name="shipping" id="van" />
                                    <label className="btn btn-outline-secondary mx-2" for="van">Van</label>
                                </div>

                            </div>
                            <div className="date-box">
                                <div className="form-title">Delivery date</div>
                                <div className="date-select">15/01/2025</div>
                            </div>
                        </div>
                    </div>
                    <div className="box2">
                        <div className="box-title">
                            ORDERS
                        </div>
                        <div className="product-name">
                            Air Force 1 Low x Louis Vuitton 'Metallic Gold'
                        </div>
                        <div className="infor-box">
                            <div className="price-box">
                                <div className="price-item font-1">Price of the item: </div>
                                <div className="price font-2">725.000.000 VND</div>
                            </div>
                            <div className="fee-box">
                                <div className="ship-fee font-1">Shipping fee: </div>
                                <div className="fee font-2">50.000 VND</div>
                            </div>
                            <div className="pilici">
                                <input className="tick" type="checkbox" />
                                <span className="poli-agree">I agree to all <a href="#" target="_blank" className="poli-link">operating policies</a></span>
                            </div>
                        </div>
                        <div className="box-final">
                            <div className="final-infor">
                                <div className="total-amount">Total Amount</div>
                                <div className="total-price font-3">725.050.000 VND</div>
                            </div>
                            <div className="btn">
                                <button className="agree-btn">Agree to ship</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Payment; 