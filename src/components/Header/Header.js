import React from "react";

import investmentImage from "../../assets/Investment.png";
import "./Header.css";

function Header() {
    return (
        <header>
            <img src={investmentImage} alt="Money plant"></img>
            <h1>Investment Calculator</h1>
        </header>
    );
};

export default Header;
