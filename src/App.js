import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import View from "./View";
import lenis from "./utils/lenis";
import link from "./utils/link";

const App = () => {

  useEffect(() => {
    lenis();
    link();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<View />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;