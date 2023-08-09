import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Intro = () => {

    // 배경화면 효과
    gsap.registerPlugin(ScrollTrigger);
    const itembgcRef = useRef(null);

    useEffect(() => {
        gsap.utils.toArray(".item").forEach((item) => {
            let color = item.getAttribute("data-bgcolor");

            ScrollTrigger.create({
                trigger: item,
                start: "top 50%",
                end: "bottom 50%",
                // markers: true,

                onEnter: () => gsap.to("body", {
                    backgroundColor: color,
                    duration: 1.4,
                }),
                onEnterBack: () => gsap.to("body", {
                    backgroundColor: color,
                    duration: 1.4,
                }),
            });
        });
    });

    return (
        <>
            <div id="intro" className="item" data-bgcolor="#1c1c1c">
                <div className="intro_text">
                    <p>Constantly</p>
                    <p>evolving,</p>
                    <p>New</p>
                    <p>front-end</p>
                    <p>developers.</p>
                </div>
            </div>
        </>
    );
};

export default Intro;
