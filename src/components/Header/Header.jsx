import "./Header.scss";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import Favourite from "../Favourites/Favourite"
import { Context } from "../../utils/context";

const Header = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showFavourite, setShowFavourite] = useState(false);
  const { cartCount,favouriteCount } = useContext(Context);

  const handleScroll = (percentage) => {
    const scrollHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollToHeight = (scrollHeight - windowHeight) * percentage;
    window.scrollTo({ top: scrollToHeight, behavior: "smooth" });
  };
  
  useEffect(() => {
    const handleScrollEvent = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);



  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => handleScroll(0.95)}>About</li>
            <li onClick={() => handleScroll(0.2)}>Categories</li>
          </ul>
          <div className="center" onClick={() => navigate("/")}>
            MyShoppers.
          </div>
          <div className="right">
            <TbSearch onClick={() => setShowSearch(true)} />
            <span className="heart-icon" onClick={() => setShowFavourite(true)}>
              <AiOutlineHeart />
              {!!favouriteCount && <span>{favouriteCount}</span>}
            </span>
            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <CgShoppingCart />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
      
      {showFavourite && <Favourite setShowFavourite={setShowFavourite} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
