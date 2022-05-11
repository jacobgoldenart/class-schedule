import { useState, useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { TermsContext } from "../Main";

export default function BreadCrumbs() {
  const [term, setTerm] = useState();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setTerm(null)
    } else {
    let termPath = location.pathname.substr(1).split("_");
    let termPathTitle = termPath.map(
      (termTitle) => termTitle[0].toUpperCase() + termTitle.substr(1)
    );
    setTerm(termPathTitle.join(" "));
    }
  }, [location]);

  return (
    <aside aria-labelledby="breadcrumb-head" className="sac-breadcrumb">
      <h3 aria-hidden="true" id="breadcrumb-head">
        Breadcrumb Navigation
      </h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={location.pathname}>{term}</Link>
        </li>
      </ul>
    </aside>
  );
}
