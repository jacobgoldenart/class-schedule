import React from 'react'
import ReactDOM from "react-dom";
import GlobalHeader from './Components/GlobalHeader'
import Footer from './Components/Footer'
import GlobalFooter from './Components/GlobalFooter'
import App from "./App";
import BreadCrumbs from './Components/BreadCrumbs';


ReactDOM.render(
  <React.StrictMode>
  <GlobalHeader />
  <BreadCrumbs />
    <App />
  <Footer />
  <GlobalFooter />
  </React.StrictMode>,
  document.getElementById("root")
);