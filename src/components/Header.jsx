import { Link } from "react-router-dom";
import { headerNav } from "../constants";

const Header = () => {
    return (
        <header id="header">
            <div className="header_wrap">
                <div className="header_logo">
                    <a href="/">Constantly evolving, <br /> New front-end developers.</a>
                </div>
                <nav className="header_nav">
                    <ul>
                        {headerNav.map((nav, i) => (
                            <li key={i}>
                                <Link to={nav.id} className="header_nav">
                                    {nav.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;