import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import CocktailCard from "./CocktailCard";
const IngredientCard = () => {
    const { ingredient_name } = useParams();

    const [cocktail, setCocktail] = useState([]);
    async function getCocktail() {
        const data = await fetch(
            "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" +
                ingredient_name
        );
        const response = await data.json();
        setCocktail(response.drinks.reverse());
    }
    useEffect(() => {
        getCocktail();
    }, []);

    if (cocktail.length == 0) {
        return <Shimmer />;
    }

    return (
        <>
            <div className="main-body">
                <h2>{ingredient_name}</h2>

                <div className="cocktail-list">
                    {cocktail.map((object, index) => {
                        return <CocktailCard {...object} key={index} />;
                    })}
                </div>
            </div>
        </>
    );
};

export default IngredientCard;
