import React from "react";
import ReactDOM from "react-dom";
import GlobalHeader from "./Components/GlobalHeader";
import Footer from "./Components/Footer";
import GlobalFooter from "./Components/GlobalFooter";
import Main from "./Main";


ReactDOM.render(
  <React.StrictMode>
    <GlobalHeader />
    <Main />
    <Footer />
    <GlobalFooter />
  </React.StrictMode>,
  document.getElementById("root")
);
