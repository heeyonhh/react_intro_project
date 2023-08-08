import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import About from "../components/About";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Main from "../components/Main";

const HomeView = () => {
  return (
    <>
      <Header />
      <Main>
        <Intro />
        <About />
        <Project />
      </Main>
      <Contact />
    </>
  );
};

export default HomeView;
