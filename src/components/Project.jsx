import React from "react";

import {projectData} from "../constants/index"

const Project = () => {
  return (
    <section id="project">
      <div className="project_wrap">

        {projectData.map((project, i)=>(
          <div key={i} className="project">
            <div className="project_img_wrap">
              <div className="project_img">{project.img}</div>
            </div>
            <div className="project_info">
              <span>{project.title}</span>
              <span>{project.type}</span>
              <span>{project.info}</span>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Project;