import { Link } from "react-router-dom";
import { headerNav } from "../constants";

import main_img from "../assets/img/main_img.jpg"
import { useEffect, useState } from "react";

const Header = () => {

    //header를 벗어나면 scrolled addclass
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const headerHeight = document.getElementById("header").clientHeight;

        setIsScrolled(scrollPosition >= headerHeight);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    
    return (
        <header id="header">
            <div className="header_top">
                <div className="header_logo">
                    <a href="/">Constantly evolving, <br /> New front-end developers.</a>
                </div>
                <nav className="header_nav">
                    <ul>
                        {headerNav.map((nav, i) => (
                            <li key={i}>
                                <Link to={nav.id} className={isScrolled ? "scrolled" : ""}>
                                    {nav.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="header_bottom">
                <span className={`header_name ${isScrolled ? "scrolled" : ""}`}>Heeyon Kim</span>
                <div className="header_img">
                    <img src={main_img} alt="main_img" />
                </div>
            </div>
        </header>
    );
};

export default Header;