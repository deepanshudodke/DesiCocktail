import { Link } from "react-router-dom";
const CartItems = ({ strDrink, strDrinkThumb, idDrink }) => {
    return (
        <>
            <div className="single-card">
                <img src={strDrinkThumb} />

                <p>{strDrink}</p>
            </div>
        </>
    );
};

export default CartItems;
