import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { aboutData } from "./data";
import aboutimg from "../img/aboutimg.jpg"

const About = () => {

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

  return (
    <section id="about" className="item" data-bgcolor="#EAEAEA">
      <div className="about_wrap">
        <div className="about_left">
          <img src={aboutimg} alt="aboutimg" />
        </div>
        <div className="about_right">
          {aboutData.map((about, i) => (
            <div key={i}>
              <div className="about_title aniitem">
                {about.title}
              </div>
              <div className="about_text">
                {about.content.map((item, j) => (
                  <p className="aniitem" key={j}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;