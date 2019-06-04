import React from 'react';
const responsiveLogo = require("../../content/img/logo_1.png?sizes[]=100,sizes[]=200,sizes[]=300");

export const HelloComponent = () =>
    <div className="content">
        <nav className="nav__main">
            <img srcSet={responsiveLogo.srcSet} src={responsiveLogo.src} alt="logo"/>
            <h2 className="title">Hello World</h2>
        </nav>
    </div>