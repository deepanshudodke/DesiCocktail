import { useEffect, useState } from "react";
import CocktailCard from "./CocktailCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnline from "../utils/useOnline";
const Body = () => {
    const isOnline = useOnline();
    const [cocktail, setCocktail] = useState([]);
    async function getCocktail() {
        const data = await fetch(
            "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
        );
        const response = await data.json();
        setCocktail(response.drinks.reverse());
    }
    useEffect(() => {
        getCocktail();
    }, []);

    if (!isOnline) {
        return <h5>You are OFFLINE Please check your internet connection</h5>;
    }
    if (cocktail.length == 0) {
        return <Shimmer />;
    }

    return (
        <>
            <div className="main-body">
                <h2>TOP COCKTAIL OF THE YEAR</h2>
                <div className="cocktail-list">
                    {cocktail.map((object, index) => {
                        return <CocktailCard {...object} key={index} />;
                    })}
                </div>
            </div>
        </>
    );
};

export default Body;
