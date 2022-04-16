import "../styles/index.scss";
import Recipes from "./Recipes";
import testimage from "../images/testimage.png";
import sassLogoSvg from "../images/sass-logo.svg";
import nature from "../images/nature.jpg";

import React from "react";

const App = () => {
    return (
        <>
        <section className="hero"></section>
        <main>
            <section>
                <h1>Oh Hai, React</h1>
            </section>
            <img src={testimage} alt="testimage" className="images" width="250" />
            <img src={sassLogoSvg} alt="sassLogoSvg" className="images" width="250" />
            <img src={nature} alt="nature" className="images" width="250" />
        </main>
        <Recipes />
        </>
    )
}

export default App
