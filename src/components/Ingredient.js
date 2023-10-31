import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Ingredient = () => {
    const [ingredient, setIngredient] = useState([]);
    async function getIngredient() {
        const data = await fetch(
            "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
        );
        const response = await data.json();

        setIngredient(response.drinks.reverse());
    }
    useEffect(() => {
        getIngredient();
    }, []);

    if (ingredient.length === 0)
        return <h5 className="loader">Loading.....</h5>;

    return (
        <>
            <div className="ingredient-body">
                <h2>TOP INGREDIENT</h2>
                <div className="ingredient-list">
                    {ingredient.map((object) => {
                        return (
                            <h3>
                                <Link to={object.strIngredient1}>
                                    {object.strIngredient1}
                                </Link>
                            </h3>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Ingredient;
