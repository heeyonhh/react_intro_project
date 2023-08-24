import React from "react";

import footerimg from "../img/ef_img1.jpg"

const Ani = () => {

    return (
        <div id="ani" className="item" data-bgcolor="#e5e3db">
            <div className="ani_wrap">
                <div className="ani">
                    <img src={footerimg} alt="footerimg" /> Constantly evolving, New front-end developer.
                </div>
            </div>
        </div>
    );
};

export default Ani;