import React from "react";

import main_img from "../assets/img/main_img.jpg"

const Intro = () => {
    return (
        <section id="intro">
            <div className="intro_wrap">
                <span className="intro_text">Heeyon Kim</span>
                <div className="intro_img">
                  <img src={main_img} alt="main_img" />
                </div>
            </div>
        </section>
    );
};

export default Intro;