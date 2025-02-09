import "./DetailProduct.css"

function DetailProduct() {
    return (
        <>
            <div className="container">
                <div className="image-section">
                    <div className="thumbnail-container">
                        <img src={process.env.PUBLIC_URL + "/subimage1.jpg"} alt="Thumbnail" />
                        <img src={process.env.PUBLIC_URL + "/subimage2.jpg"} alt="Thumbnail" />
                        <img src={process.env.PUBLIC_URL + "/subimage3.jpg"} alt="Thumbnail" />
                        <img src={process.env.PUBLIC_URL + "/subimage4.jpg"} alt="Thumbnail" />
                    </div>

                        <div class="GrayBackground">
                            <button class="arrow">&lt;</button>
                        </div>

                        <img src={process.env.PUBLIC_URL + "/MainImage.jpg"} class="main-image" alt="Main Item" />

                        <div class="GrayBackground">
                            <button class="arrow">&gt;</button>
                        </div>
                </div>

                <div class="auction-card">
                    <div class="auction-title">Air Force 1 Low x Louis Vuitton ‘Metallic Gold’</div>
                    <div class="current-bid"><span>Current Bid:</span> <span class="amount">625.000.000</span> <span>VND</span></div>
                    <div class="timer">Closes in 19h 19m</div>

                    <div class="bid-options">
                        <button class="bid"><span class="amount">675.000.000</span> <span>VND</span></button>
                        <button class="bid"><span class="amount">700.000.000</span> <span>VND</span></button>
                    </div>

                    <input type="text" placeholder="675.000.000 or up" className="bid-input"/>

                    <div class="button-group">
                        <button class="place-bid">Place Bid</button>
                        <button class="set-max-bid">Set Max Bid</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailProduct ;