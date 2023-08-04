import React from "react";

const Header = () => {
    return (
    <header id="header">
        <div className="header_wrap">
            <div className="header_logo">
                <a href="/">Constantly evolving, <br/>
                New front-end developers.</a>
            </div>
            <nav className="header_nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#project">Project</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li>( Menu )</li>
                </ul>
            </nav>
        </div>
    </header>
    );
};

export default Header;