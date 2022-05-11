import { useState, useContext, useEffect } from "react";
import "./AllCourses.css";
import { useNavigate } from "react-router-dom";
import { TermsContext } from "../Main";

function AllCourses(props) {
 
  const termsLinks = useContext(TermsContext);
  const navigate = useNavigate();

  function handleTermChange(e) {
    //console.log(e.target.value);
    const changeTerm = e.target.value.toLowerCase().replaceAll(" ", "_");
    navigate(`/${changeTerm}`);
  }

  return (
    <div className={`page-schedule-term-`}>
      <article>

        <form>
          <fieldset>
            <label aria-hidden="true">Filter Courses</label>
            <input type="text" placeholder="Filter Courses" />
          </fieldset>
          <fieldset>
            <select onChange={handleTermChange} defaultValue="">
              <option value="" disabled>
                Select Another Term...
              </option>
              {termsLinks.map((termLink) => (
                <option key={termLink.term} value={termLink.term_ldesc}>
                  {termLink.term_ldesc}
                </option>
              ))}
            </select>
          </fieldset>
        </form>
        <section>
          <div>
            <ul>
              <li>course list will go here</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
}

export default AllCourses;
