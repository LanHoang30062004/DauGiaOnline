import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from './../../interceptor/index';
import { url } from "../../util/Url";
import styles from "./detailProduct.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CountdownTimer from "../CountDown";
import { formatCurrency } from './../../util/format';
import { da } from "date-fns/locale";
/*
 - Auctioning and end time => dang dau gia 
 - Auctionging => Dau gia xong
 - => Chua den thoi gian dau gia
*/
function DetailProduct() {
    const [product, setProduct] = useState({});
    const [images, setImages] = useState([]);
    const [auctioning, setAuctioning] = useState(false);
    const [endTime, setEndTime] = useState(null);
    const { id } = useParams();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentPrice, setCurrentPrice] = useState(0);
    const [currentBid, setCurrentBid] = useState(0);
    const email = localStorage.getItem("email");

    // handle when end time auction
    useEffect(() => {
        if (!endTime) {
            console.log("Cart");
            axiosInstance.post(`products/cart/${email}/${product.id}`)
                .then((res) => console(res))
                .catch((err) => console.log(err))
        }
    }, [endTime])


    useEffect(() => {
        axiosInstance.get(`auction/${product.id}`)
            .then((res) => {
                const data = res.data.data;
                if (data) {
                    setCurrentPrice(data.bid);
                }

            })
            .catch((err) => console.log(err));
    }, [currentPrice])

    useEffect(() => {
        axiosInstance.get(`${url}products/${id}`)
            .then((res) => {
                const data = res.data.data;
                setProduct(data);
                setCurrentPrice(data.startingPrice);
                setImages(data.urlResources || []);

                const auctionStart = new Date(data.auctionTime);
                const auctionEnd = new Date(auctionStart.getTime() + 90 * 1000);
                setEndTime(auctionEnd);

                if (new Date() >= auctionStart) {
                    setAuctioning(true);
                } else {
                    setAuctioning(false);
                }
            })
            .catch((err) => console.error(err));
    }, [id]);

    useEffect(() => {
        if (images.length > 0) {
            setCurrentIndex(0);
        }
    }, [images]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePlaceBid = () => {
        if (currentBid > currentPrice) {
            setCurrentPrice(currentBid);
            axiosInstance.post("auction/place-bid", {
                "email": email,
                "bid": currentBid,
                "productId": product.id
            })
                .then((res) => {
                    const data = res.data.data;
                })
                .catch((err) => console.log(err))
        }
        else {
            toast.info("Tiền cược hiện tại đang thấp hơn giá trị cược", {
                autoClose: 2000,
                position: "bottom-right"
            })
        }

    }

    const handlePlaceBidForButton = (price) => {
        if (price > currentPrice) {
            setCurrentPrice(price);
            axiosInstance.post("auction/place-bid", {
                "email": email,
                "bid": price,
                "productId": product.id
            })
                .then((res) => {
                    const data = res.data.data;
                })
                .catch((err) => console.log(err))
        }
        else {
            toast.info("Tiền cược hiện tại đang thấp hơn giá trị cược hiện tại", {
                autoClose: 2000,
                position: "bottom-right"
            })
        }

    }
    const handleBuy = () => {

    }
    const handleCurrentBid = (e) => {
        const data = e.target.value;
        if (data) setCurrentBid(data);
    }
    return (
        <div className={styles.container}>
            <div className={styles.imageSection}>
                <div className={styles.thumbnailContainer}>
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={`http://localhost:8081/api/v1/products/images/${img}`}
                            alt="Thumbnail"
                            onClick={() => setCurrentIndex(index)}
                            className={`${styles.thumbnail} ${index === currentIndex ? styles.activeThumbnail : ""}`}
                        />
                    ))}
                </div>

                <div onClick={handlePrev} className={styles.grayBackground}>
                    <button className={styles.arrow}>&lt;</button>
                </div>

                {images.length > 0 && (
                    <img
                        src={`http://localhost:8081/api/v1/products/images/${images[currentIndex]}`}
                        className={styles.mainImage}
                        alt="Main Item"
                    />
                )}

                <div onClick={handleNext} className={styles.grayBackground}>
                    <button className={styles.arrow}>&gt;</button>
                </div>
            </div>

            <div className={styles.auctionCard}>
                <div className={styles.auctionTitle}>{product.name}</div>
                <div className={styles.currentBid}>
                    <span>Current Bid:</span> <span className={styles.amount}>{formatCurrency(currentPrice)}</span> <span>VND</span>
                </div>

                <div className={styles.timer}>
                    {auctioning && endTime ? (
                        <CountdownTimer initialTime={Math.max(0, Math.floor((endTime - new Date()) / 1000))} setEndTime={setEndTime} />
                    ) : (
                        <div>{auctioning ? "Time's up!" : "Waiting for auction to start..."}</div>
                    )}
                </div>

                {/* <div className={styles.bidOptions}>
                    <button onClick={() => handlePlaceBidForButton(currentPrice * 1.2)} className={styles.bid}>
                        <span className={styles.amount}>{formatCurrency(currentPrice * 1.2)}</span> <span>VND</span>
                    </button>
                    <button onClick={() => handlePlaceBidForButton(currentPrice * 1.5)} className={styles.bid}>
                        <span className={styles.amount}>{formatCurrency(currentPrice * 1.5)}</span> <span>VND</span>
                    </button>
                </div>
                <div>
                    <input onBlur={handleCurrentBid}
                        placeholder={`${formatCurrency(currentPrice * 1.2)} or up`}
                        className={styles.bidInput}
                    />
                    <div className={styles.buttonGroup}>
                        <button onClick={handlePlaceBid} className={styles.placeBid}>Place Bid</button>
                        <button onClick={() => handlePlaceBidForButton(currentPrice * 1.5)} className={styles.setMaxBid}>Set Max Bid</button>
                    </div>
                </div> */}

                {auctioning && endTime ? (
                    <div>
                        <div className={styles.bidOptions}>
                            <button onClick={() => handlePlaceBidForButton(currentPrice * 1.2)} className={styles.bid}>
                                <span className={styles.amount}>{formatCurrency(currentPrice * 1.2)}</span> <span>VND</span>
                            </button>
                            <button onClick={() => handlePlaceBidForButton(currentPrice * 1.5)} className={styles.bid}>
                                <span className={styles.amount}>{formatCurrency(currentPrice * 1.5)}</span> <span>VND</span>
                            </button>
                        </div>
                        <div>
                            <input onBlur={handleCurrentBid}
                                placeholder={`${formatCurrency(currentPrice * 1.2)} or up`}
                                className={styles.bidInput}
                            />
                            <div className={styles.buttonGroup}>
                                <button onClick={handlePlaceBid} className={styles.placeBid}>Place Bid</button>
                                <button onClick={() => handlePlaceBidForButton(currentPrice * 1.5)} className={styles.setMaxBid}>Set Max Bid</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={styles.buttonGroup}>
                        <button onClick={handleBuy} className={styles.placeBid}>Buy</button>
                    </div>
                )}


            </div>
            <ToastContainer />
        </div>
    );
}

export default DetailProduct;
