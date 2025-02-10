import styles from "./detailProduct.module.css"
function DetailProduct() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.imageSection}>
                    <div className={styles.thumbnailContainer}>
                        <img src={process.env.PUBLIC_URL + "/subimage1.jpg"} alt="Thumbnail" />
                        <img src={process.env.PUBLIC_URL + "/subimage2.jpg"} alt="Thumbnail" />
                        <img src={process.env.PUBLIC_URL + "/subimage3.jpg"} alt="Thumbnail" />
                        <img src={process.env.PUBLIC_URL + "/subimage4.jpg"} alt="Thumbnail" />
                    </div>

                    <div className={styles.grayBackground}>
                        <button className={styles.arrow}>&lt;</button>
                    </div>

                    <img src={process.env.PUBLIC_URL + "/MainImage.jpg"} className={styles.mainImage} alt="Main Item" />

                    <div className={styles.grayBackground}>
                        <button className={styles.arrow}>&gt;</button>
                    </div>
                </div>

                <div className={styles.auctionCard}>
                    <div className={styles.auctionTitle}>
                        Air Force 1 Low x Louis Vuitton ‘Metallic Gold’
                    </div>
                    <div className={styles.currentBid}>
                        <span>Current Bid:</span> <span className={styles.amount}>625.000.000</span> <span>VND</span>
                    </div>
                    <div className={styles.timer}>Closes in 19h 19m</div>

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

        </>
    )
}

export default DetailProduct;