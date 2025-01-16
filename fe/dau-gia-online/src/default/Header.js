import { IoIosCall } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { FaWallet } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import "./default.scss"
function Header() {
    return (
        <>
            <div className="header">
                <div className="header__above">
                    <div className="above__content">
                        <div className="above__phone"><IoIosCall /></div>
                        <div className="above__cart"><IoCart /></div>
                        <div className="above__payment">
                            <FaWallet />
                            12$
                        </div>
                    </div>
                </div>
                <div className="header__below">
                    <div className="below__content">
                        <div className="below__image">
                            <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="Logo" />
                        </div>
                        <div className="below__search">
                            <div className="below__magnifying"><FaMagnifyingGlass /></div>
                            <input placeholder="Tìm kiếm" />
                                <div className="below__filter">Bộ Lọc</div>
                        </div>
                        <div className="below__button">Tìm kiếm</div>
                        <div className="s"></div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;