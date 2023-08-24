import React, { useState, useEffect } from "react";
import { Link } from "react-scroll"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Nav } from "./data";

const Intro = () => {
    const [Opacity, setOpacity] = useState(0);
    const [animateState, setAnimateState] = useState(false);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // 인트로 배경 애니메이션
        gsap.to(".intro_bg", {
            duration: 1,
            height: 0,
            delay: 2, //2초 뒤에 시작
            ease: "power2.inOut",
            onComplete: () => {
                //인트로 배경 애니메이션 끝난 후 텍스트 Opacity
                setOpacity(1);
                //line
                const introLine = document.querySelector(".intro_line");
                if (introLine) {
                    introLine.classList.add("ready");
                }
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
            <div id="intro" data-bgcolor="#212125" className='item'>
                <div className="intro_top">
                    <span className="intro_text" style={{ opacity: Opacity }}>
                        Constantly<br />evolving,<br />
                        New<br />front-end<br />developer.
                    </span>
                    <nav className={`nav ${animateState ? "animate" : ""}`} style={{ opacity: Opacity }}>
                        {Nav.map((nav, i) => (
                            <Link key={i} className={`menu ${animateState ? "animate" : ""}`} to={nav.id}
                            spy={true} smooth={true} offset={0} duration={500}>
                                {nav.title}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="intro_center">
                    <div className="intro_center_img" style={{ opacity: Opacity }}></div>
                    <p className="intro_line"></p>
                </div>
                <div className='intro_wrap'>
                    <p className={`intro_logo ${animateState ? "animate" : ""}`} style={{ opacity: Opacity }}>
                        Heeyon Kim
                    </p>
                </div>
            </div >
        </>
    );
};

export default Intro;