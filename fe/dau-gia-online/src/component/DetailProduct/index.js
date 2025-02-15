import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from './../../interceptor/index';
import { url } from "../../util/Url";
import styles from "./detailProduct.module.css";

function DetailProduct() {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    const images = [
        "/subimage1.jpg",
        "/subimage2.jpg",
        "/subimage3.jpg",
        "/subimage4.jpg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [mainImage, setMainImage] = useState(images[0]);

    useEffect(() => {
        axiosInstance.get(url + `products/${id}`)
            .then((res) => {
                setProduct(res.data.data);
            })
            .catch((err) => console.log(err));
    }, [id]);

    useEffect(() => {
        setMainImage(images[currentIndex]);
    }, [currentIndex]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className={styles.container}>
            <div className={styles.imageSection}>
                <div className={styles.thumbnailContainer}>
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={process.env.PUBLIC_URL + img}
                            alt="Thumbnail"
                            onClick={() => setCurrentIndex(index)}
                            className={`${styles.thumbnail} ${index === currentIndex ? styles.activeThumbnail : ""}`}
                        />
                    ))}
                </div>

                <div onClick={handlePrev} className={styles.grayBackground}>
                    <button className={styles.arrow}>&lt;</button>
                </div>

                <img
                    src={process.env.PUBLIC_URL + mainImage}
                    className={styles.mainImage}
                    alt="Main Item"
                />
            

                <div onClick={handleNext} className={styles.grayBackground}>
                    <button className={styles.arrow}>&gt;</button>
                </div>
            </div>

            <div className={styles.auctionCard}>
                <div className={styles.auctionTitle}>{product.name}</div>
                <div className={styles.currentBid}>
                    <span>Current Bid:</span> <span className={styles.amount}>{product.startingPrice}</span> <span>VND</span>
                </div>
                <div className={styles.timer}>Closes in {product.auctionTime}</div>

                <div className={styles.bidOptions}>
                    <button className={styles.bid}>
                        <span className={styles.amount}>675.000.000</span> <span>VND</span>
                    </button>
                    <button className={styles.bid}>
                        <span className={styles.amount}>700.000.000</span> <span>VND</span>
                    </button>
                </div>

                <input htmlFor="text" placeholder="675.000.000 or up" className={styles.bidInput} />

                <div className={styles.buttonGroup}>
                    <button className={styles.placeBid}>Place Bid</button>
                    <button className={styles.setMaxBid}>Set Max Bid</button>
                </div>
            </div>
        </div>
    );
}

export default DetailProduct;
