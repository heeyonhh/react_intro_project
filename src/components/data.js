import projectimg1 from "../img/project1.png";
import projectimg2 from "../img/project2.png";
import projectimg3 from "../img/project3.png";

export const Nav = [
    {
        id: "intro",
        title: "Home"
    },
    {
        id: "about",
        title: "About"
    },
    {
        id: "project",
        title: "Project",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

export const aboutData = [
    {
        title: 'About',
        content: [
            'Name / 김 희 연 Heeyon Kim',
            'Date Of Birth / 1992 08 27',
            'Professional Certificates /',
            'NCS UI&UX 디자인 프론트엔드 개발자 양성 심사과정 수료',
            '웹디자인 기능사, 컴퓨터 그래픽스 운용기능사',
            '2종 보통 운전면허',
            'Work Experience /',
            'AK MALL 패션잡화 AMD, 패션 브랜드 피칸파이 운영',
            'Phone / 010 7271 6432'
        ],
    },
    {
        title: 'Skill',
        content: [
            '언어 / HTML CSS Javascript Typescript',
            '라이브러리 / jQuery React Redux Recoil Sass',
            'GitHub MUI Bootstrap Reactnative Expo Firebase',
            '디자인툴 / Photoshop Illustrator Figma',
        ],
    },
];

export const projectData = [
    {
        bgcolor: "#212125",
        img: <img src={projectimg1} />,
        url: "https://coskorea.netlify.app",
        logo: "COS",
        title: "COS 홈페이지",
        type: "Project 1",
        info: "설명",
        // 따로 따로 쓰기
        UseStack: "html5/css3/javascripy/jquery",
    },
    {
        bgcolor: "#5A5148",
        img: <img src={projectimg2} />,
        url: "https://platocoffee.netlify.app/",
        logo: <p>plato<br />coffee</p>,
        title: "플라토 커피 주문 앱",
        type: "Project 2",
        info: "설명",
        UseStack: "react.js/redux/recoil/kakaoapi/mui/bootstrap/figma",
    },
    {
        bgcolor: "#212125",
        img: <img src={projectimg3} />,
        url: null,
        logo: "'HEEPOLIO'",
        title: "HEEPOLIO",
        type: "Project 3",
        info: "설명",
        UseStack: "react.js/sass/gsap/figma",
    },
];

export const contactData = [
    { icon: "🐙", label: "GitHub", detail: "github.com/heeyonhh", url: "https://github.com/heeyonhh/react_intro_project"},
    { icon: "✉️", label: "Email", detail: "lightram23@gmail.com", url: null },
    { icon: "📱", label: "Phone", detail: "010 7271 6432", url: null },
  ];
  
  const [github, email, instagram] = contactData;
  export const Tabs = [github, email, instagram];