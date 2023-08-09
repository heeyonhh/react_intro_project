import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Nav } from "./data";

const Intro = () => {

    return (
        <>
            <div className="intro_bg"></div>
            <div id="intro" className="item">
                <nav className="nav">
                    <ul>
                        {Nav.map((nav, i) => (
                            <li key={i}>
                                <Link to={nav.id}>
                                    {nav.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="intro_wrap" ref={introTextRef}>
                     <p className="intro_text_item">
                        Constantly<br />evolving,<br />
                        New<br />front-end<br />developers.
                    </p>
                </div>
                <div className="intro_bottom">
                    <span
                        className='intro_name'
                    >
                        Heeyon Kim
                    </span>
                </div>
            </div>
        </>
    );
};

export default Intro;