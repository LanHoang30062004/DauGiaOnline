import "./style.css";
import Header from './../../default/Header';
import Footer from './../../default/Footer';
function HomePage() {
    return (
        <>
            <Header />
            <div className="ui">
                <div className="header-box">
                    <div className="image-header"></div>
                </div>
                <div className="cate-box">
                    <div className="cate-title">Explore Popular Categories</div>
                    <div className="cate-pro">
                        <div className="cate-1 rt">
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="image-1 cate-img"><img src={process.env.PUBLIC_URL + "/watch.png"} alt="" /></a>
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="name">Watch</a>
                        </div>
                        <div className="cate-2 rt">
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="image-2 cate-img"><img src={process.env.PUBLIC_URL + "/bag.png"} alt="" /></a>
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="name">Bag</a>
                        </div>
                        <div className="cate-3 rt">
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="image-3 cate-img"><img src={process.env.PUBLIC_URL + "/sneakers.png"} alt="" /></a>
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="name">Sneakers</a>
                        </div>
                        <div className="cate-4 rt">
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="image-4 cate-img"><img src={process.env.PUBLIC_URL + "/antique.png    "} alt="" /></a>
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="name">Antique</a>
                        </div>
                    </div>
                </div>
                <div className="auc-box">
                    <div className="auc-title">Auction today</div>
                    <div className="product">
                        <div className="product-1 pro-se">
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="pro-img"><img src={process.env.PUBLIC_URL + "/ima3.jpg"} alt="" /></a>
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="pro-name">Jacob & Co Astronomia Flawless Imperial Dragon</a>
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="pro-price">35.500.000.000 VND</a>
                            <div className="time">18:25</div>
                        </div>
                        <div className="product-2 pro-se">
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="pro-img"><img src={process.env.PUBLIC_URL + "/prod-2.png"} alt="" /></a>
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="pro-name">Jacob & Co Fleurs de Jardin</a>
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="pro-price">15.000.000.000 VND</a>
                            <div className="time">2:12:15</div>
                        </div>
                        <div className="product-3 pro-se">
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="pro-img"><img src={process.env.PUBLIC_URL + "/prod-3.png"} alt="" /></a>
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="pro-name">Himalaya Crocodile Retourné Kelly</a>
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="pro-price">10.000.000.000 VND</a>
                            <div className="time">15:02</div>
                        </div>
                        <div className="product-4 pro-se">
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="pro-img"><img src={process.env.PUBLIC_URL + "/prod-4.png"} alt="" /></a>
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="pro-name">Ming Dynasty water vase</a>
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="pro-price">12.000.000.000 VND</a>
                            <div className="time">21:13</div>
                        </div>
                        <div className="product-5 pro-se">
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="pro-img"><img src={process.env.PUBLIC_URL + "/prod-5.png"} alt="" /></a>
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="pro-name">Cheristie</a>
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="pro-price">23.000.000.000 VND</a>
                            <div className="time">15:12</div>
                        </div>
                        <div className="product-6 pro-se">
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="pro-img"><img src={process.env.PUBLIC_URL + "/prod-6.png"} alt="" /></a>
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="pro-name">Nike Air Force 1 Low x Louis Vuitton Virgil</a>
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="pro-price">200.000.000 VND</a>
                            <div className="time">1:14:05</div>
                        </div>
                        <div className="product-7 pro-se">
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="pro-img"><img src={process.env.PUBLIC_URL + "/prod-7.png"} alt="" /></a>
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="pro-name">Pinner Qing Dynasty</a>
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="pro-price">83.000.000.000 VND</a>
                            <div className="time">03:04</div>
                        </div>
                        <div className="product-8 pro-se">
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="pro-img"><img src={process.env.PUBLIC_URL + "/prod-8.png"} alt="" /></a>
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="pro-name">Hermès Sellier Mosaïque Kelly</a>
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="pro-price">8.600.000.000 VND</a>
                            <div className="time">3:01:15</div>
                        </div>
                        <div className="product-9 pro-se">
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="pro-img"><img src={process.env.PUBLIC_URL + "/prod-9.png"} alt="" /></a>
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="pro-name">Air Force 1 Low x Louis Vuitton 'Metallic Gold'</a>
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="pro-price">625.000.000 VND</a>
                            <div className="time">19:20</div>
                        </div>
                        <div className="product-10 pro-se">
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="pro-img"><img src={process.env.PUBLIC_URL + "/prod-10.png"} alt="" /></a>
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="pro-name">Faubourg Birkin</a>
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="pro-price">7.800.000.000 VND  </a>
                            <div className="time">02:08</div>
                        </div>
                        <div className="product-11 pro-se">
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="pro-img"><img src={process.env.PUBLIC_URL + "/prod-11.png"} alt="" /></a>
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="pro-name">Van Cleef & Arpels Lady Arpels</a>
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="pro-price">7.380.000.000 VND</a>
                            <div className="time">22:04</div>
                        </div>
                        <div className="product-12 pro-se">
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="pro-img"><img src={process.env.PUBLIC_URL + "/prod-12.png"} alt="" /></a>
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="pro-name">Nike Air Yeezy 2 Red October</a>
                            <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="pro-price">1.903.050.000 VND</a>
                            <div className="time">20:25</div>
                        </div>
                    </div>
                    <div className="list-page">
                        <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="start list" >{'<'}</a>
                        <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="number list" >1</a>
                        <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="number list" >2</a>
                        <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="number list" >3</a>
                        <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="number list" >4</a>
                        <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="number list" >5</a>
                        <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="number list" >...</a>
                        <a href="https://trello.com/b/e6H5IA59/d%E1%BA%A5u-gia-online" className="end list" > {'>'} </a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default HomePage; 