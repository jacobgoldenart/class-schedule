import ClassTable from "../Components/ClassTable";
import "./CourseDetails.css"
import { useState, useEffect, useContext } from "react";
import {
  useNavigate,
  useLocation,
  NavLink,
  useParams,
  useSearchParams,
  Link
} from "react-router-dom";
import { TermsContext } from "../App";
import useFetch from "../Components/utils/useFetch";
import uuid from 'react-uuid'




function CourseDetails() {
  const [termData, setTermData] = useState()
  const terms = useContext(TermsContext);
  const navigate = useNavigate();
  let { id } = useParams();
  let location = useLocation();
  const { get } = useFetch();

  console.log(termData)

  useEffect(() => {

    get(`${location.pathname}`).then((data) => {
    setTermData(data);
  });

  }, [location]);

console.log(location);

  return (
    <main>
    <article className="page-schedule-details">
    
      <aside className="side-nav ">
        <nav id="myScrollspy">
          <ul className="nav nav-pills ul-button-stack list-group">
          {terms.map((term) => (
            <li key={term.term}>
              {/* <Link to={`${term.term_ldesc.toLowerCase().replace(/ /g, "_")}`}  */}
              <Link to={`/term/${term.term}`} 
              state={{all_terms: terms,term_desc: term.term_ldesc }}>{term.term_ldesc}</Link>
            </li>
          ))}
          </ul>
        </nav>
        <div className="legend-sidebar">
          <div className="icon-block">
            <h3>Icon Indicators</h3>
            <figure> <img src="http://www.csus.edu/dev/class_schedule/book-icon-big.png" alt="Book Legend Icon" />
              <figcaption>Link to course materials list.</figcaption>
            </figure>
            <figure> <img src="http://www.csus.edu/dev/class_schedule/low-cost-book-icon-big.png" alt="Low Cost Course Materials Legend Icon" />
              <figcaption>Course has a total material cost under $40, per the campus bookstore. Availability of low-cost materials may be limited to availability.</figcaption>
            </figure>
            <figure> <img src="http://www.csus.edu/dev/class_schedule/zero-cost-book-icon-big.png" alt="Zero Cost Course Materials Legend Icon" />
              <figcaption>Course has no course materials cost.</figcaption>
            </figure>
          </div>
          <div className="attr-block">
            <h3>Class Attribute Codes</h3>
            <dl> <dt>HY</dt>
              <dd>Hybrid (OnLine &amp; In-Person Meetings)</dd> <dt>I</dt>
              <dd>Service Learning Internship</dd> <dt>OL</dt>
              <dd>Online</dd> <dt>1</dt>
              <dd title="01/24/2022 to 05/13/2022">Regular Academic Session</dd> <dt>SNS</dt>
              <dd title="01/24/2022 to 05/22/2022">Self Support Nonstandard Dates</dd>
            </dl>
          </div>
        </div>
      </aside>
      <section>
        <h1>Table of Contents</h1>
        <div className="toc-wrapper">
          {termData && termData.map((item) =>
            <div key={uuid()} className="toc-card">
              <a href={'#' + item.subject_code + '-' + item.catalog_number}>{item.subject_code + " " + item.catalog_number}</a>
            </div>
          )}
        </div>
        <div className="table-section">
          {termData && termData.map((item) =>
            <ClassTable section={item} />
          )}
        </div>
      </section>
    </article>
    </main>
  )
}

export default CourseDetails;
