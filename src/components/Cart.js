import { useSelector } from "react-redux";
import CartItems from "./CartItems";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    return (
        <div className="cocktail-list main-body">
            {cartItems.map((object, index) => {
                return <CartItems {...object} key={index} />;
            })}
        </div>
    );
};

export default Cart;
