import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Intro from "../components/Intro";
import Header from "../components/Header";
import About from "../components/About";
import Project from "../components/Project";
import Contact from "../components/Contact";

const View = () => {

  // 배경화면 효과
  gsap.registerPlugin(ScrollTrigger);
  const itembgcRef = useRef(null);

  useEffect(()=> {
    gsap.utils.toArray(".item").forEach((item) => {
      let color = item.getAttribute("data-bgcolor");
  
      ScrollTrigger.create({
          trigger: item,
          start: "top 50%",
          end: "bottom 50%",
          // markers: true,
  
          onEnter: () => gsap.to("body", {
              backgroundColor: color,
              duration: 1.4,
          }),
          onEnterBack: () => gsap.to("body", {
              backgroundColor: color,
              duration: 1.4,
          }),
      });
    });
  });

  return (
    <>
      <Intro ref={itembgcRef}/>
      <Header ref={itembgcRef}/>
      <About ref={itembgcRef}/>
      <Project ref={itembgcRef}/>
      <Contact ref={itembgcRef}/>
    </>
  );
};

export default View;
