import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Category = () => {
    const [category, setCategory] = useState([]);
    async function getCategory() {
        const data = await fetch(
            "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
        );
        const response = await data.json();

        setCategory(response.drinks);
    }
    useEffect(() => {
        getCategory();
    }, []);

    if (category.length === 0) return <h5 className="loader">Loading.....</h5>;

    return (
        <>
            <div className="category-body">
                <h2>TOP CATEGORY</h2>
                <div className="category-list">
                    {category.map((object) => {
                        return (
                            <h3>
                                <Link to={object.strCategory}>
                                    {object.strCategory}
                                </Link>
                            </h3>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Category;
