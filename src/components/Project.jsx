import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { projectData } from "./data";

const Project = () => {
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
    <section id="project" className="item" data-bgcolor="#212125">
      <div className="project_wrap">
        {projectData.map((project, i) => (
          <div key={i} className="project item" data-bgcolor={project.bgcolor}>
            <div className="project_url_wrap">
              <Link to={project.url} className="project_url" target="_blank" rel="noopener noreferrer">
                {project.img}
                <p className="project_logo">{project.logo}</p>
              </Link>
            </div>
            <div className="project_info_wrap aniitem">
              <span className="project_title">{project.title}</span>
              <span className="project_type">{project.type}</span>
              <span className="project_info">{project.info}</span>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Project;