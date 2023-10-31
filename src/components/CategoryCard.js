import { useEffect, useState } from "react";
import CocktailCard from "./CocktailCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import { filterData } from "../utils/helper";

const CategoryCard = () => {
    const { category_name } = useParams();
    const [searchValue, setSearchValue] = useState("");
    const [allCocktail, setAllCocktail] = useState([]);
    const [filteredCocktail, setFilteredCocktail] = useState(null);
    async function getCocktail() {
        const data = await fetch(
            "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" +
                category_name
        );
        const response = await data.json();
        setAllCocktail(response.drinks.reverse());
        setFilteredCocktail(response.drinks.reverse());
    }
    useEffect(() => {
        getCocktail();

        // return () => {
        //     console.log("CategoryCard Destroyed");
        // };
    }, []);

    if (allCocktail.length == 0) {
        return <Shimmer />;
    }

    return (
        <>
            <div className="main-body">
                <h2>{category_name}</h2>
                <input
                    type="text"
                    placeholder="Enter your text"
                    value={searchValue}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        const data = filterData(searchValue, allCocktail);

                        setFilteredCocktail(data);
                    }}
                >
                    Search
                </button>
                <div className="cocktail-list">
                    {filteredCocktail.map((object, index) => {
                        return <CocktailCard {...object} key={index} />;
                    })}
                </div>
            </div>
        </>
    );
};

export default CategoryCard;
