import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Cocktail = () => {
    const { id } = useParams();

    const [cocktail, setCocktail] = useState([]);
    async function getCocktail() {
        const data = await fetch(
            "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id
        );
        const response = await data.json();

        setCocktail(response.drinks[0]);
    }

    useEffect(() => {
        getCocktail();
    }, []);

    if (cocktail.length === 0) return <h5 className="loader">Loading.....</h5>;

    return (
        <>
            <div className="cocktail">
                <h3>{cocktail.strDrink}</h3>
                <div className="single-cocktail">
                    <div className="first">
                        <img src={cocktail.strDrinkThumb} />
                    </div>
                    <div className="second">
                        <h4>
                            CATEGORY: <span>{cocktail.strCategory}</span>
                        </h4>
                        <h4>
                            ALCOHOLIC: <span>{cocktail.strAlcoholic}</span>
                        </h4>

                        <h4>
                            GLASS: <span>{cocktail.strGlass}</span>
                        </h4>
                        <h4>
                            INSTRUCTION: <span>{cocktail.strInstructions}</span>
                        </h4>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cocktail;
