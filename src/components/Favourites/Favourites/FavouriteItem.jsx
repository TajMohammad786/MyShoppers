import "./FavouriteItem.scss";
import { MdClose } from 'react-icons/md';
import prod from '../../../assets/products/earbuds-prod-1.webp';
import { useContext } from "react";
import { Context } from "../../../utils/context";
const FavouriteItem = () => {

    const { favouriteItems, handleRemoveFromFavourite } = useContext(Context);

    return <div className="cart-products">
        {favouriteItems.map((item) => (
            <div key={item.id} className="cart-product">
                <div className="img-container">
                    <img src={process.env.REACT_APP_DEV_URL +
                        item.attributes.img.data[0].attributes.url} alt="" />
                </div>
                <div className="prod-details">
                    <div className="name">{item.attributes.title}</div>
                    <MdClose className="close-btn" onClick={() => {
                        handleRemoveFromFavourite(item)
                    }} />
                    <div className="text">
                        <span>{item.attributes.quantity}</span>
                        <span>x</span>
                        <span>&#8377;{item.attributes.price}</span>
                        <span>{" "}={" "}</span>
                        <span className="highlight">&#8377;{item.attributes.price * item.attributes.quantity}</span>
                    </div>
                </div>

            </div>
        ))}

    </div>;
};

export default FavouriteItem;
