import ClassTable from "../Components/ClassTable";
import "./CourseDetails.css"
import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { TermsContext } from "../App";
import useFetch from "../Components/utils/useFetch";
import uuid from 'react-uuid'


function CourseDetails() {
  const [termData, setTermData] = useState()
  const terms = useContext(TermsContext);
  let location = useLocation();
  const { get } = useFetch();


  useEffect(() => {
    // get(`${location.pathname.slice(16)}`).then((data) => {
    get(`${location.pathname}`).then((data) => {
    setTermData(data);
  });

  }, [location]);


  return (
    <div className="page-schedule-details">
     <article id="skip">
    
      <aside className="side-nav">
        <ul className="toc-wrapper">
          {termData && termData.map((item) =>
            <li key={uuid()} className="toc-card">
              <a href={'#' + item.subject_code + '-' + item.catalog_number}>{item.subject_code + " " + item.catalog_number}</a>
            </li>
          )}
        </ul>
      </aside>

      <section>
        {/* Change Table of Contents to Name of Course */}
        <div className="toc-header">
        <h1>Subject Name</h1>
        <h2>All Courses in SubjectName available in term</h2>
        </div>
        <div className="table-section">
          {termData && termData.map((item) =>
            <ClassTable section={item} />
          )}
        </div>
      </section>

     </article>
    </div>
  )
}

export default CourseDetails;
