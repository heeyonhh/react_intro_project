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
            '라이브러리 / React JQuery',
            'GitHub MUI Bootstrap GSAP Framer-motion',
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
        type: "Project 1",
        title: "COS Responsive Web Site",
        info: [ 'HTML, CSS, Javascript를 사용하여 만든 반응형 웹 표준 사이트입니다.',
        'COS 공식 사이트의 레이아웃 디자인과 기능을 유사하게 보이도록 제작하였으며',
        '유저에게 브랜드의 미니멀함과 고급스러움을 잘 전달할 수 있도록',
        '기존 COS의 디자인에서 더 깔끔하게 리디자인 하는 것에 중점을 두었습니다.' ],
        useStack: "HTML / CSS / Javascript / JQuery",
    },
    {
        bgcolor: "#5A5148",
        img: <img src={projectimg2} />,
        url: "https://platocoffee.netlify.app/",
        logo: <p>plato<br />coffee</p>,
        type: "Project 2",
        title: "플라토 커피 주문 앱 made with React",
        info: [ "플라토 커피라는 브랜드를 만들어 주문 앱을 개발하였습니다.",
        "사용자의 위치 정보를 기반으로 가까운 매장 계산하여 보여주고 선택할 수 있는 기능과",
        "카카오 Api 로그인 구현 & Recoil persist 통한 로그인 상태 저장 기능을 구현하였으며",
        "Redux 상품 관리와 함께 메인페이지의 카테고리 별로 추천되는 추천 메뉴 영역 구성하고",
        "주문 상품 정보 & 매장 정보를 끌어와 총 주문 금액 계산하여 최종 결제 진행하는 루트 구현한 웹&앱입니다." ],
        useStack: "React / Redux / Recoil / Geolocation API / Kakao API / Mui / Bootstrap / Figma"
    },
    {
        bgcolor: "#212125",
        img: <img src={projectimg3} />,
        url: "https://heefolio.netlify.app/",
        logo: "`HEEFOLIO`",
        title: "`HEEFOLIO` made with React",
        type: "Project 3",
        info: [ "React를 사용하여 반응형으로 제작한 저만의 색깔을 담아낸 포트폴리오 사이트 입니다.",
        "lenis 라이브러리를 이용한 스코롤 스무스 초기 설정을 구현하였으며",
        "부드러운 애니메이션을 구현할 수 있도록 Jsx, Sass, GSAP를 적절하게 믹스하여 디자인하였습니다.",
        "GSAP, Framer-motion 라이브러리를 사용하여 배경화면, 텍스트, 이미지 패럴랙스 효과와",
        "React-scroll 패키지를 통해 섹션간 스크롤 이동을 구현하였습니다."],
        useStack: "React / Sass / Gsap / Framer-motion / Figma",
    },
];

export const contactData = [
    { icon: "🐙", label: "GitHub", detail: "github.com/heeyonhh", url: "https://github.com/heeyonhh/react_intro_project"},
    { icon: "✉️", label: "Email", detail: "lightram23@gmail.com", url: null },
    { icon: "📱", label: "Phone", detail: "010 7271 6432", url: null },
  ];
  
  const [github, email, instagram] = contactData;
  export const Tabs = [github, email, instagram];