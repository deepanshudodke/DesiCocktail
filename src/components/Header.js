import { Link } from "react-router-dom";
const Header = () => {
    return (
        <>
            <div className="header">
                <div className="logo">
                    <h1>
                        <box-icon
                            className="wine"
                            name="drink"
                            type="solid"
                            flip="horizontal"
                        ></box-icon>
                    </h1>
                    <h1>DesiCocktail</h1>
                </div>

                <ul className="nav-items">
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"category"}>Category</Link>
                    </li>
                    <li>
                        <Link to={"ingredient"}>Ingredient</Link>
                    </li>
                    <li>
                        <Link to={"contact"}>Contact</Link>
                    </li>
                    <li>
                        <Link to={"about"}>About</Link>
                    </li>
                </ul>

                <ul className="sign-in">
                    <li style={{ paddingTop: 5 }}>
                        <box-icon type="solid" name="cart-alt"></box-icon>
                    </li>
                    <li>Signin</li>
                    <li>Signup</li>
                </ul>
            </div>
        </>
    );
};

export default Header;
