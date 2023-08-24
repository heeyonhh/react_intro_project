import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs } from "./data";

import footerimg from "../img/ef_img1.jpg"
import backtop from "../img/back-top.png"
import { Navigate } from "react-router-dom";

const Contact = () => {

  //backtop 버튼
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  //window 창 담기
  const [selectedTab, setSelectedTab] = useState(Tabs[0]);

  return (
    <footer id="contact" className="item" data-bgcolor="#e5e3db">
      <div className="contact_ani_wrap">
        <div className="contact_ani">
          <img src={footerimg} alt="footerimg" /> ` HEEPOLIO ` lightram23@gmail.com <img src={footerimg} alt="footerimg" /> ` HEEPOLIO ` lightram23@gmail.com <img src={footerimg} alt="footerimg" /> ` HEEPOLIO ` lightram23@gmail.com</div>
      </div>
      <div className="contact_right">
        <div className="backtop_box aniitem" onClick={scrollToTop}>
          <img src={backtop} alt="backtop" />
        </div>
      </div>
      <div className="contact_center">
        <div className="ui">
          <nav>
            <div className="contact_menu_wrap">
              {Tabs.map((tabs) => (
                <div
                  key={tabs.label}
                  className={`menu ${tabs === selectedTab ? "active" : ""}`}
                  onClick={() => setSelectedTab(tabs)}
                >
                  {`${tabs.icon} ${tabs.label}`}
                  {tabs === selectedTab ? (
                    <motion.div className="menu_line" layoutId="menu_line" />
                  ) : null}
                </div>
              ))}
            </div>
          </nav>
          <div className="ui_detail_wrap">
            <AnimatePresence mode="wait">
              <a key={selectedTab} href={selectedTab.url} target="_blank" rel="noopener noreferrer">
                <motion.div className="ui_detail"
                  key={selectedTab ? selectedTab.label : "null"}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {selectedTab ? (
                    <div className="detail_icon">
                      {selectedTab.icon}
                    </div>
                  ) : (
                    "null"
                  )}
                  {selectedTab ? (
                    <div className="detail_detail">
                      {selectedTab.detail}
                    </div>
                  ) : (
                    "null"
                  )}
                </motion.div>
              </a>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;