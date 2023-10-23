import projectimg1 from "../img/project1.png";
import projectimg2 from "../img/project2.jpg";
import projectimg3 from "../img/project3.jpg";
import projectimg4 from "../img/project4.png";
import projectimg5 from "../img/project5.png";

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
            'Work Experience /',
            'AK MALL 패션잡화 AMD, 패션 브랜드 피칸파이 운영',
            'Phone / 010 7271 6432'
        ],
    },
    {
        title: 'Skill',
        content: [
            '웹디자인 기능사 (HTML CSS JavaScript)',
            '컴퓨터 그래픽스 운용기능사 (Adobe Photoshop & Illustrator)',
            '디자인툴 / AdobeXD Figma Zeplin',
            '협업툴 / Git Zeplin',
            '언어 / HTML CSS JavaScript',
            '프레임워크 / React Vue',
            '라이브러리 / JQuery GSAP Framer-motion THREE.js',
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
        '기존 COS의 디자인에서 더 깔끔하게 리디자인 하는 것에 중점을 두었습니다.'],
        useStack: "HTML / CSS / Javascript / JQuery",
        contribute : "기여도 100% (메인 페이지 & 로그인 페이지)",
    },
    {
        bgcolor: "#7f7f7f",
        img: <img src={projectimg2} />,
        url: "https://heeyonhh.github.io/Responsive_design/",
        logo: "NEXEN TIRE",
        type: "Project 2",
        title: "NEXEN TIRE Web Site",
        info: [ '동적인 슬라이드 배너, 동영상 슬라이드, 탭메뉴를 구현한',
        '넥센 타이어 반응형 웹 페이지 입니다.',
        '클론 코딩 및 탭메뉴 리디자인을 해보며 이미지 호버, 제이쿼리 이벤트 스킬을 습득하였습니다.'],
        useStack: "HTML / CSS / Javascript / JQuery",
        contribute : "기여도 100% (메인 페이지 & 타이어 찾기 탭메뉴)",
    },
    {
        bgcolor: "#938787",
        img: <img src={projectimg3} />,
        url: "https://heeyonhh.github.io/jquery_design/",
        logo: "화성시 보건소",
        type: "Project 3",
        title: "화성시 보건소 리디자인",
        info: [ '기존의 화성시 보건소 사이트에',
        '전체 연령대에 명료하게 정보를 전달해야함을 잃지 않으면서도',
        '컬러와 동적인 요소를 주어 리디자인하였습니다.',
        'Open Weather API를 끌어와 화성시 날씨를 구현하였고',
        '서브페이지에 게시판, 타이포 애니메이션을 구현하였습니다.'],
        useStack: "HTML / CSS / Javascript / JQuery",
        contribute : "기여도 100% (메인 페이지 & 로그인 페이지 & 서브 진료소 안내 & 찾아오시는 길 & 인사말 페이지)",
    },
    {
        bgcolor: "#5A5148",
        img: <img src={projectimg4} />,
        url: "https://platocoffee.netlify.app/",
        logo: <p>plato<br />coffee</p>,
        type: "Project 2",
        title: "플라토 커피 주문 앱 made with React",
        info: [ "플라토 커피라는 브랜드를 만들어 주문 앱을 개발하였습니다.",
        "사용자의 위치 정보를 기반으로 가까운 매장 계산하여 보여주고 선택할 수 있는 기능과",
        "카카오 Api 로그인 구현 & Recoil persist 통한 로그인 상태 저장 기능을 구현하였으며",
        "Redux 상품 관리와 함께 메인페이지의 카테고리 별로 추천되는 추천 메뉴 영역 구성하고",
        "주문 상품 정보 & 매장 정보를 끌어와 총 주문 금액 계산하여 최종 결제 진행하는 루트 구현한 웹&앱입니다." ],
        useStack: "React / Redux / Recoil / Geo API / Kakao API / Mui / Bootstrap / Figma",
        contribute : "개발 기여도 100%",
    },
    {
        bgcolor: "#212125",
        img: <img src={projectimg5} />,
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
        contribute : "기여도 100%",
    },
];

export const contactData = [
    { icon: "🐙", label: "GitHub", detail: "github.com/heeyonhh", url: "https://github.com/heeyonhh/react_intro_project"},
    { icon: "✉️", label: "Email", detail: "lightram23@gmail.com", url: null },
    { icon: "📱", label: "Phone", detail: "010 7271 6432", url: null },
  ];
  
  const [github, email, instagram] = contactData;
  export const Tabs = [github, email, instagram];