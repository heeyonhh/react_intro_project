import React from "react";

import footerimg from "../img/ef_img1.jpg"

const Ani = () => {

    return (
        <div id="ani" className="item" data-bgcolor="#e5e3db">
            <div className="ani_wrap">
                <div className="ani">
                    Constantly evolving, New&nbsp;<img src={footerimg} alt="footerimg" />&nbsp;front-end developer.&nbsp;<img src={footerimg} alt="footerimg" />
                </div>
            </div>
        </div>
    );
};

export default Ani;