import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import about_img from "../assets/img/aboutimg.jpg"

const About = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".aniitem", {
      x: 200, // 시작 위치
      opacity: 0,
      duration: 1,
      stagger: 0.2, // 시간차
      scrollTrigger: {
        trigger: ".about_wrap", // 애니메이션 시작 트리거하
        start: "top 80%", // 애니메이션 시작 위치
        end: "bottom 20%", // 애니메이션 끝 위치
        scrub: 1, // 스크롤에 따라 끌어당기기
      },
    });
  }, []);

  return (
    <section id="about" className="item" data-bgcolor="#f6f5f2">
      <div className="about_wrap">
        <div className="about_left">
          <img src={about_img} alt="about_img" className="aniitem" />
        </div>
        <div className="about_right aniitem">
          <div className="about_text">
            <p>Name / 김 희 연 Heeyon Kim</p>
            <p>Date Of Birth / 1992 08 27</p>
            <p>Professional Certificates / NCS UI&UX 디자인 프론트엔드 개발자 양성 통합심사 과정수료, 웹디자인 기능사, 컴퓨터 그래픽스 운용기능사, 2종 보통 운전면허</p>
            <p>Work Experience / AK MALL 패션잡화 AMD, 패션 브랜드 피칸파이 운영</p>
            <p>Phone / 010 7271 6432</p>
            <p>Address / 경기도 화성시 봉담</p>
          </div>
          <div className="skill">Skill</div>
          <div className="about_skill">
            <p>언어 /  HTML CSS Javascript Typescript</p>
            <p>라이브러리 /  jQuery React ReactNative</p>
            <p>GitHub MUI Bootstrap Expo Firebase</p>
            <p>디자인툴 /  Photoshop Illustrator Figma</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;