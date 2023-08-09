import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Nav } from "./data";

const Intro = () => {
    const [elementsOpacity, setElementsOpacity] = useState(0);
    const [animateState, setAnimateState] = useState(false);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // 인트로 배경 애니메이션
        gsap.to(".intro_bg", {
            duration: 2,
            height: 0,
            delay: 2, //2초 뒤에 시작
            ease: "power2.inOut",
            onComplete: () => {
                //인트로 배경 애니메이션 끝난 후 텍스트 Opacity
                setElementsOpacity(1);
            },
        });

        // 50% height에 스코롤 닿으면 animate addclass
        const handleScroll = () => {
            setAnimateState(window.scrollY >= window.innerHeight * 0.5);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    return (
        <>
            <div className="intro_bg"></div>
            <div id="intro"  data-bgcolor="#1c1c1c" className={`item ${animateState ? "animate" : ""}`}>
                <div className={`intro_top ${animateState ? "animate" : ""}`}>
                    <span className={`intro_name ${animateState ? "animate" : ""}`} style={{ opacity: elementsOpacity }}>
                        Heeyon Kim
                    </span>
                </div>
                <div className='intro_wrap'>
                    <p className={`intro_text_item ${animateState ? "animate" : ""}`} style={{ opacity: elementsOpacity }}>
                        Constantly<br />evolving,<br />
                        New<br />front-end<br />developers.
                    </p>
                </div>
                <nav className={`nav ${animateState ? "animate" : ""}`} style={{ opacity: elementsOpacity }}>
                    <ul>
                        {Nav.map((nav, i) => (
                            <li className={`menu_box ${animateState ? "animate" : ""}`} key={i}>
                                <Link className={`menu ${animateState ? "animate" : ""}`} to={nav.id}>
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