import "./Footer.scss";
import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from 'react-icons/fa';
import Payment from '../../assets/payments.png';
const Footer = () => {
    return <div className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                    <p>
                        At MyShoppers, we are passionate about bringing you the latest and most innovative electronic gadgets. With a focus on superior quality and cutting-edge technology, we strive to provide you with an unparalleled audio experience.
                        Our carefully curated collection includes Bluetooth speakers, wireless buds, smartwatches, and headphones that are designed to elevate your music, enhance your workouts, and make your daily life more convenient and connected.
                        Whether you're an audiophile, a fitness enthusiast, or a tech lover, we have the perfect gadgets to meet your needs.
                    </p>
                </div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">
                        Kayaloram Rd, Punnamada, Kottankulnagara, Alapuzhha,
                        Kerala, 688086
                    </div>
                </div>
                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text">
                        Phone : +91 82892 29929
                    </div>
                </div>
                <div className="c-item">
                    <FaEnvelope />
                    <div className="text">
                        Email: Shoppers@gmail.com
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>
                <span className="text">Headphones</span>
                <span className="text">Smart Watches</span>
                <span className="text">Bluetooth Speakers</span>
                <span className="text">Wireless Buds</span>
                <span className="text">Home Theatre</span>
                <span className="text">Projectors</span>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Terms & Conditions</span>
                <span className="text">Contact Us</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">MYSHOPPERS 2023 CREATED BY TAJ MOHAMMAD. PREMIUIM E-COMMERCE SOLUTIONS.</div>
                <img src={Payment} alt="" />
            </div>

        </div>
    </div>;
};

export default Footer;
