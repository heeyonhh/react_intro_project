import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Nav } from "./data";

const Intro = () => {
    const [elementsOpacity, setElementsOpacity] = useState(0);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".intro_bg", {
            duration: 2,
            height: 0,
            delay: 2, //2초후 시작
            ease: "power2.inOut",
            onComplete: () => {
                setElementsOpacity(1); // 요소들을 보이게 설정
            },
        });
        
    }, []);

    return (
        <>
            <div className="intro_bg"></div>
            <div id="intro" className="item">
                <div className="intro_top">
                    <span className='intro_name' style={{ opacity: elementsOpacity }}>
                        Heeyon Kim
                    </span>
                </div>
                <div className="intro_wrap">
                    <p className="intro_text_item" style={{ opacity: elementsOpacity }}>
                        Constantly<br />evolving,<br />
                        New<br />front-end<br />developers.
                    </p>
                </div>
                <nav className="nav" style={{ opacity: elementsOpacity }}>
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
            </div>
        </>
    );
};

export default Intro;
