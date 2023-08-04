import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import About from "../components/About";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Main from "../components/Main";

const HomeView = () => {
  return (
    <>
      <Header />
      <Main>
        <Intro />
        <About />
        <Project />
        <Contact />
      </Main>
      <Footer />
    </>
  );
};

export default HomeView;
