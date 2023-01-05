import React from "react";
import catLogo from'../images/header-logo.png';

export default function Header() {
    return (
        <header className="row mt-3">
            <div className="col-12 d-flex justify-content-center">
                <h3 className="header-heading display-6">∙ The Cat Page ∙</h3>
                <img src={catLogo} className="header-logo"/>
            </div>
            <div className="col-12 d-flex justify-content-center">
                <p className="header-text">Click on the card buttons to learn more about each cat breed!</p>
            </div>
        </header>
    )
}
