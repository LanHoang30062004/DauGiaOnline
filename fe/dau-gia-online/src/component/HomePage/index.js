import styles from "./homePage.module.css";
function HomePage() {
    return (
        <>
            <div className={styles.ui}>
                <div className={styles.headerBox}>
                    <div className={styles.imageHeader}></div>
                </div>
                <div className={styles.cateBox}>
                    <div className={styles.cateTitle}>Explore Popular Categories</div>
                    <div className={styles.catePro}>
                        <div className={styles.cate1 + " " + styles.rt}>
                            <div className={styles.image1 + " " + styles.cateImg}><img src={process.env.PUBLIC_URL + "/watch.png"} alt="" /></div>
                            <div className={styles.name}>Watch</div>
                        </div>
                        <div className={styles.cate2 + " " + styles.rt}>
                            <div className={styles.image2 + " " + styles.cateImg}><img src={process.env.PUBLIC_URL + "/bag.png"} alt="" /></div>
                            <div className={styles.name}>Bag</div>
                        </div>
                        <div className={styles.cate3 + " " + styles.rt}>
                            <div className={styles.image3 + " " + styles.cateImg}><img src={process.env.PUBLIC_URL + "/sneakers.png"} alt="" /></div>
                            <div className={styles.name}>Sneakers</div>
                        </div>
                        <div className={styles.cate4 + " " + styles.rt}>
                            <div className={styles.image4 + " " + styles.cateImg}><img src={process.env.PUBLIC_URL + "/antique.png"} alt="" /></div>
                            <div className={styles.name}>Antique</div>
                        </div>
                    </div>
                </div>
                <div className={styles.aucBox}>
                    <div className={styles.aucTitle}>Auction today</div>
                    <div className={styles.product}>
                        <div className={styles.product1 + " " + styles.proSe}>
                            <div className={styles.proImg}><img src={process.env.PUBLIC_URL + "/ima3.jpg"} alt="" /></div>
                            <div className={styles.proName}>Jacob & Co Astronomia Flawless Imperial Dragon</div>
                            <div className={styles.proPrice}>35.500.000.000 VND</div>
                            <div className={styles.time}>18:25</div>
                        </div>
                        <div className={styles.product2 + " " + styles.proSe}>
                            <div className={styles.proImg}><img src={process.env.PUBLIC_URL + "/prod-2.png"} alt="" /></div>
                            <div className={styles.proName}>Jacob & Co Fleurs de Jardin</div>
                            <div className={styles.proPrice}>15.000.000.000 VND</div>
                            <div className={styles.time}>2:12:15</div>
                        </div>
                        <div className={styles.product3 + " " + styles.proSe}>
                            <div className={styles.proImg}><img src={process.env.PUBLIC_URL + "/prod-3.png"} alt="" /></div>
                            <div className={styles.proName}>Himalaya Crocodile Retourné Kelly</div>
                            <div className={styles.proPrice}>10.000.000.000 VND</div>
                            <div className={styles.time}>15:02</div>
                        </div>
                        <div className={styles.product4 + " " + styles.proSe}>
                            <div className={styles.proImg}><img src={process.env.PUBLIC_URL + "/prod-4.png"} alt="" /></div>
                            <div className={styles.proName}>Ming Dynasty water vase</div>
                            <div className={styles.proPrice}>12.000.000.000 VND</div>
                            <div className={styles.time}>21:13</div>
                        </div>
                        <div className={styles.product5 + " " + styles.proSe}>
                            <div className={styles.proImg}><img src={process.env.PUBLIC_URL + "/prod-5.png"} alt="" /></div>
                            <div className={styles.proName}>Cheristie</div>
                            <div className={styles.proPrice}>23.000.000.000 VND</div>
                            <div className={styles.time}>15:12</div>
                        </div>
                        <div className={styles.product6 + " " + styles.proSe}>
                            <div className={styles.proImg}><img src={process.env.PUBLIC_URL + "/prod-6.png"} alt="" /></div>
                            <div className={styles.proName}>Nike Air Force 1 Low x Louis Vuitton Virgil</div>
                            <div className={styles.proPrice}>200.000.000 VND</div>
                            <div className={styles.time}>1:14:05</div>
                        </div>
                        <div className={styles.product7 + " " + styles.proSe}>
                            <div className={styles.proImg}><img src={process.env.PUBLIC_URL + "/prod-7.png"} alt="" /></div>
                            <div className={styles.proName}>Pinner Qing Dynasty</div>
                            <div className={styles.proPrice}>83.000.000.000 VND</div>
                            <div className={styles.time}>03:04</div>
                        </div>
                        <div className={styles.product8 + " " + styles.proSe}>
                            <div className={styles.proImg}><img src={process.env.PUBLIC_URL + "/prod-8.png"} alt="" /></div>
                            <div className={styles.proName}>Hermès Sellier Mosaïque Kelly</div>
                            <div className={styles.proPrice}>8.600.000.000 VND</div>
                            <div className={styles.time}>3:01:15</div>
                        </div>
                        <div className={styles.product9 + " " + styles.proSe}>
                            <div className={styles.proImg}><img src={process.env.PUBLIC_URL + "/prod-9.png"} alt="" /></div>
                            <div className={styles.proName}>Air Force 1 Low x Louis Vuitton 'Metallic Gold'</div>
                            <div className={styles.proPrice}>625.000.000 VND</div>
                            <div className={styles.time}>19:20</div>
                        </div>
                        <div className={styles.product10 + " " + styles.proSe}>
                            <div className={styles.proImg}><img src={process.env.PUBLIC_URL + "/prod-10.png"} alt="" /></div>
                            <div className={styles.proName}>Faubourg Birkin</div>
                            <div className={styles.proPrice}>7.800.000.000 VND  </div>
                            <div className={styles.time}>02:08</div>
                        </div>
                        <div className={styles.product11 + " " + styles.proSe}>
                            <div className={styles.proImg}><img src={process.env.PUBLIC_URL + "/prod-11.png"} alt="" /></div>
                            <div className={styles.proName}>Van Cleef & Arpels Lady Arpels</div>
                            <div className={styles.proPrice}>7.380.000.000 VND</div>
                            <div className={styles.time}>22:04</div>
                        </div>
                        <div className={styles.product12 + " " + styles.proSe}>
                            <div className={styles.proImg}><img src={process.env.PUBLIC_URL + "/prod-12.png"} alt="" /></div>
                            <div className={styles.proName}>Nike Air Yeezy 2 Red October</div>
                            <div className={styles.proPrice}>1.903.050.000 VND</div>
                            <div className={styles.time}>20:25</div>
                        </div>
                    </div>
                    <div className={styles.listPage}>
                        <div className={styles.start + " " + styles.list} >{'<'}</div>
                        <div className={styles.number + " " + styles.list} >1</div>
                        <div className={styles.number + " " + styles.list} >2</div>
                        <div className={styles.number + " " + styles.list} >3</div>
                        <div className={styles.number + " " + styles.list} >4</div>
                        <div className={styles.number + " " + styles.list} >5</div>
                        <div className={styles.number + " " + styles.list} >...</div>
                        <div className={styles.end + " " + styles.list} > {'>'} </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomePage;
