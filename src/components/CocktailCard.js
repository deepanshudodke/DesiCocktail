import { Link } from "react-router-dom";
const CocktailCard = ({ strDrink, strDrinkThumb, idDrink }) => {
    return (
        <>
            <Link to={"/cocktail/" + idDrink}>
                <div className="single-card">
                    <img src={strDrinkThumb} />

                    <p>{strDrink}</p>
                </div>
            </Link>
        </>
    );
};

export default CocktailCard;
