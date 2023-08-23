import React from "react";

import footerimg from "../img/ef_img1.jpg"
import backtop from "../img/back-top.png"

const Contact = () => {

  //backtop 버튼
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer id="contact" className="item" data-bgcolor="#e5e3db">
      <div className="contact_ani_wrap">
        <div className="contact_ani">
          <img src={footerimg} alt="footerimg" /> ` HEEPOLIO ` lightram23@gmail.com <img src={footerimg} alt="footerimg" /> ` HEEPOLIO ` lightram23@gmail.com <img src={footerimg} alt="footerimg" /> ` HEEPOLIO ` lightram23@gmail.com</div>
      </div>
      <div className="contact_right">
        <div className="backtop_box aniitem" onClick={scrollToTop}>
          <img src={backtop} alt="backtop" />
        </div>
      </div>
    </footer>
  );
};

export default Contact;