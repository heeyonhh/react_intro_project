import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import about_img from "../assets/img/aboutimg.jpg"

const About = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    //이질감 효과 주기
    gsap.utils.toArray(".about_item").forEach(item => {
      gsap.to(item, {
        yPercent: -10, // 위로 10%만큼 이동
        ease: "none",
        duration: 1.0, // 지속 시간
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.4, // 스크롤에 따라 애니메이션 속도를 조절
        },
      });
    });

  }, []);

  return (
    <section id="about" className="item" data-bgcolor="#f6f5f2">
      <div className="about_wrap">
        <div className="about_left">
          <img src={about_img} alt="about_img" className="about_item"/>
        </div>
        <div className="about_right">
          <p className="about about_item">About</p>
          <p className="about_text about_item">
            Name / 김 희 연 Heeyon Kim<br />
            Date Of Birth / 1992 08 27<br />
            Professional Certificates / NCS UI&UX 디자인 프론트엔드 개발자 양성 통합심사 과정수료, 웹디자인 기능사, 컴퓨터 그래픽스 운용기능사, 2종 보통 운전면허<br />
            Work Experience / AK MALL 패션잡화 AMD, 패션 브랜드 피칸파이 운영<br />
            Phone / 010 7271 6432<br />
            Address / 경기도 화성시 봉담
          </p>
          <p className="skill about_item">Skill</p>
          <p className="about_skill about_item">
            언어 /  HTML CSS Javascript Typescript<br />
            라이브러리 /  jQuery React ReactNative<br />
            GitHub MUI Bootstrap Expo Firebase<br />
            디자인툴 /  Photoshop Illustrator Figma
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;