import { Link, useNavigate, useOutletContext, useSearchParams } from "react-router-dom";
import Header from "../../default/Header";
import styles from "./homePage.module.css";
import { useEffect, useState } from "react";
import axiosInstance from "../../interceptor";
import { url } from './../../util/Url';
import { formatCurrency } from "../../util/format";
import { compareTime, convertDateTime } from "../../util/formatDate";
import { format } from "date-fns";
function HomePage() {
    const size = 12;
    const navigate = useNavigate();
    const [totalPage, setTotalPage] = useState(0);
    const [products, setProducts] = useState([]);
    const [checkDate , setCheckDate] = useState() ; 
    const { filter, search } = useOutletContext();
    var { category, type, sort } = filter;
    sort = sort ?? "";
    category = category ?? "";
    const [currentPage, setCurrentPage] = useState(1);


    const startPage = Math.max(1, Math.min(currentPage - 2, totalPage - 4));
    const endPage = Math.min(totalPage, startPage + 4);

    const handlePageClick = (page) => {
        if (page >= 1 && page <= totalPage) {
            setCurrentPage(page);
        }
    };
    const handleAuctioning = (time) => {
        
    }
    useEffect(() => {
        console.log(search);
        if (search) {
            axiosInstance.get(`products/by-search?page=${currentPage}&size=${size}&search=${search}`)
                .then((res) => {
                    setProducts(res.data.data.items);
                    setTotalPage(res.data.data.totalPages)
                })
                .catch((err) => console.log(err))
        }
        else {
            if (type == null) {
                axiosInstance.get(`products/by-filter?page=${currentPage}&size=${size}&sort=${sort}&category=${category}`)
                    .then((res) => {
                        setProducts(res.data.data.items);
                        setTotalPage(res.data.data.totalPages)
                    })
                    .catch((err) => console.log(err))
            }
            else {
                if (type == 0) {
                    axiosInstance.get(`products/by-filter?page=${currentPage}&size=${size}&sort=${sort}&category=${category}&type=false`)
                        .then((res) => {
                            setProducts(res.data.data.items);
                            setTotalPage(res.data.data.totalPages)

                        })
                        .catch((err) => console.log(err))
                }
                else {
                    axiosInstance.get(`products/by-filter?page=${currentPage}&size=${size}&sort=${sort}&category=${category}&type=true`)
                        .then((res) => {
                            setProducts(res.data.data.items);
                            setTotalPage(res.data.data.totalPages)
                        })
                        .catch((err) => console.log(err))
                }

            }
        }


    }, [currentPage, sort, type, category, search])
    console.log(products);
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
                        {products.map((p) =>
                            <div className={styles.product2 + " " + styles.proSe} onClick={() => navigate(`/detail-product/${p.id}`)}>
                                <div className={styles.proImg}>
                                    <img src={`http://localhost:8081/api/v1/products/images/${p.urlResources[0]}`} alt="" />
                                </div>
                                <div className={styles.proName}>{p.name}</div>
                                <div className={styles.proPrice}>{formatCurrency(p.startingPrice)}VND</div>
                                <div className={styles.time}>{
                                    compareTime(convertDateTime(p.auctionTime)) ? "Auction Ended" : convertDateTime(p.auctionTime)
                                }</div>
                            </div>
                        )}
                    </div>
                    <div className={styles.listPage}>
                        <div
                            className={`${styles.start} ${styles.list} ${currentPage === 1 ? styles.disabled : ""}`}
                            onClick={() => handlePageClick(currentPage - 1)}
                        >
                            {"<"}
                        </div>

                        {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((page) => (
                            <div
                                key={page}
                                className={`${styles.number} ${styles.list} ${currentPage === page ? styles.active : ""}`}
                                onClick={() => handlePageClick(page)}
                            >
                                {page}
                            </div>
                        ))}

                        <div
                            className={`${styles.end} ${styles.list} ${currentPage === totalPage ? styles.disabled : ""}`}
                            onClick={() => handlePageClick(currentPage + 1)}
                        >
                            {">"}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomePage;
