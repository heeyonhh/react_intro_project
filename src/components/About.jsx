import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import about_img from "../assets/img/aboutimg.jpg"

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
    <section id="about" className="item" data-bgcolor="#f6f5f2">
      <div className="about_wrap">
        <div className="about_left">
          <img src={about_img} alt="about_img" className="aniitem" />
        </div>
        <div className="about_right">
          <div className="about aniitem">About</div>
          <div className="about_text">
            <p className="aniitem">Name / 김 희 연 Heeyon Kim</p>
            <p className="aniitem">Date Of Birth / 1992 08 27</p>
            <p className="aniitem">Professional Certificates / NCS UI&UX 디자인 프론트엔드 개발자 양성 통합심사 과정수료, 웹디자인 기능사, 컴퓨터 그래픽스 운용기능사, 2종 보통 운전면허</p>
            <p className="aniitem">Work Experience / AK MALL 패션잡화 AMD, 패션 브랜드 피칸파이 운영</p>
            <p className="aniitem">Phone / 010 7271 6432</p>
            <p className="aniitem">Address / 경기도 화성시 봉담</p>
          </div>
          <div className="skill aniitem">Skill</div>
          <div className="about_skill">
            <p className="aniitem">언어 / HTML CSS Javascript Typescript</p>
            <p className="aniitem">라이브러리 /  jQuery React ReactNative</p>
            <p className="aniitem">GitHub MUI Bootstrap Expo Firebase</p>
            <p className="aniitem">디자인툴 /  Photoshop Illustrator Figma</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;