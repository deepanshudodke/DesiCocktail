import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Category from "./components/Category";
import Ingredient from "./components/Ingredient";
import Contact from "./components/Contact";
import About from "./components/About";
import CategoryCard from "./components/CategoryCard";
import Cocktail from "./components/Cocktail";
import IngredientCard from "./components/IngredientCard";

const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/category",
                element: <Outlet />,
                children: [
                    {
                        path: ":category_name",
                        element: <CategoryCard />
                    },
                    {
                        path: "",
                        element: <Category />
                    }
                ]
            },
            {
                path: "/ingredient",
                element: <Outlet />,
                children: [
                    {
                        path: ":ingredient_name",
                        element: <IngredientCard />
                    },
                    {
                        path: "",
                        element: <Ingredient />
                    }
                ]
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/cocktail/:id",
                element: <Cocktail />
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
