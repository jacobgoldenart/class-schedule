import { useState, useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function BreadCrumbs() {
  const [term, setTerm] = useState({
    titlePath:null,
    title: null,
    details: null,
    detailsPath:null
  });

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {

      setTerm({
        titlePath:null,
        title: null,
        details: null,
        detailsPath:null
      })
      console.log(`location is ${location.pathname}`)
    } else {
    
    let titlePath = location.pathname.split("/")

    let termPath = location.pathname
      .substr(1)
      .replaceAll("_", " ")
      .toString()
      .split("/");

    let termPathTitle = termPath.map(
      (termTitle) => termTitle[0].toUpperCase() + termTitle.substr(1)
    );
    setTerm({ 
      titlePath: titlePath[1], 
      title: termPathTitle[0], 
      details: termPathTitle[1],
      detailsPath: location.pathname,
    });
  }
  }, [location, setTerm]);

  console.log(term);

  return (
    <aside aria-labelledby="breadcrumb-head" className="sac-breadcrumb">
      <h3 aria-hidden="true" id="breadcrumb-head">
        Breadcrumb Navigation
      </h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {term.title && (
          <li>
            <Link to={term.titlePath}>{term.title}</Link>
          </li>
        )}
        {term.details && (
          <li>
            <Link to={term.detailsPath}>{term.details}</Link>
          </li>
        )}
      </ul>
    </aside>
  );
}
