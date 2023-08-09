
import about_img from "../assets/img/aboutimg.jpg"

const About = () => {

  return (
    <section id="about" className="item" data-bgcolor="#f6f5f2">
      <div className="about_wrap">
        <div className="about_left">
          <img src={about_img} alt="about_img" />
        </div>
        <div className="about_right">
          <p className="about">About</p>
          <p className="about_text">
            Name / 김 희 연 Heeyon Kim<br/>
            Date Of Birth / 1992 08 27<br/>
            Professional Certificates / NCS UI&UX 디자인 프론트엔드 개발자 양성 통합심사 과정수료, 웹디자인 기능사, 컴퓨터 그래픽스 운용기능사, 2종 보통 운전면허<br/>
            Work Experience / AK MALL 패션잡화 AMD, 패션 브랜드 피칸파이 운영<br/>
            Phone / 010 7271 6432<br/>
            Address / 경기도 화성시 봉담
          </p>
          <p className="skill">Skill</p>
          <p className="about_skill">
            언어 /  HTML CSS Javascript Typescript<br/>
            라이브러리 /  jQuery React ReactNative<br/>
            GitHub MUI Bootstrap Expo Firebase<br/>
            디자인툴 /  Photoshop Illustrator Figma
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;