import "./Banner.scss";
import BannerImg from '../../../assets/banner-img.png'

const Banner = () => {
    const handleScroll = (percentage) => {
        const scrollHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        const scrollToHeight = (scrollHeight - windowHeight) * percentage;
        window.scrollTo({ top: scrollToHeight, behavior: "smooth" });
    };
    
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>Elevate Sound</h1>
                    <p>Explore our wide range of cutting-edge electronic gadgets, including Bluetooth speakers, wireless buds, smartwatches, and headphones. Elevate your audio experience with premium quality and innovative features.</p>
                    <div className="ctas">
                        <div className="banner-cta" onClick={() => handleScroll(0.95)}>Read More</div>
                        <div className="banner-cta v2" onClick={() => handleScroll(0.2)}>Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;
