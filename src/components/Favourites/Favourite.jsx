import "./Favourite.scss";
import { MdClose } from "react-icons/md";
import { BsFillBagHeartFill } from "react-icons/bs";
import FavouriteItem from './Favourites/FavouriteItem'
import { useContext } from "react";
import { Context } from "../../utils/context";



const Favourite = ({ setShowFavourite }) => {
   
    const { favouriteItems } = useContext(Context);

    return <div className="cart-panel">
        <div className="opac-layer">Cart </div>
        <div className="cart-content">
            <div className="cart-header">
                <span className="heading">Favourites</span>
                <span className="close-btn" onClick={() => setShowFavourite(false)}>
                    <MdClose />
                    <span className="text">Close</span>
                </span>
            </div>
            {!favouriteItems?.length && <div className="empty-cart">
                <BsFillBagHeartFill />
                <span>Discover your favourite products in shop</span>
                <button className="return-cta" onClick={() => setShowFavourite(false)}>RETURN TO SHOP</button>
            </div>}
            {!!favouriteItems?.length && (<>
                <FavouriteItem />
                
            </>)}
        </div>
    </div>;
};

export default Favourite;
