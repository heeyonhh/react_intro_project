import React from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import footerimg from "../img/ef_img1.jpg"
import backtop from "../img/back-top.png"

const Contact = () => {

  useEffect(() => {
    gsap.set('.aniitem', { opacity: 0, x: 100, y: 0 }); // 초기 상태 설정

    const animate = (item) => {
      gsap.to(item, {
        autoAlpha: 1,
        x: 0,
        y: 0,
        duration: 1,
        ease: 'expo',
      });
    };

    const items = gsap.utils.toArray('.aniitem');

    items.forEach((item, index) => {
      ScrollTrigger.create({
        trigger: item,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => animate(item), // 요소가 보이면 애니메이션 실행
        delay: index * 0.1, // 순차적인 딜레이 적용
      });
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer id="contact" className="item" data-bgcolor="#e5e3db">
      <div className="contact_left">
        <img className="aniitem" src={footerimg} alt="footerimg" />
      </div>
      <div className="contact_center">
        <p className="aniitem">` HEEPOLIO `</p>
        <p className="aniitem">Heeyon Kim</p>
        <p className="email aniitem">lightram23@gmail.com</p>
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