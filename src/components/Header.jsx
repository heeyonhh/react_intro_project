import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { headerNav } from "../constants";

const Header = () => {

    //header를 벗어나면 scrolled addclass
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const headerHeight = document.getElementById("header").clientHeight;
        const triggerPosition = headerHeight * 0.5; //  * 0.5헤더 높이의 50%
    
        setIsScrolled(scrollPosition >= triggerPosition);
    };
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    
    return (
        <header id="header" className="item" data-bgcolor="#1c1c1c">
            <div className="header_top">
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
            </div>
        </header>
    );
};

export default Header;