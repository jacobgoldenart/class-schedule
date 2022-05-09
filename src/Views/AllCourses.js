import { useState, useContext, useEffect } from "react";
import "./AllCourses.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TermsContext } from "../App";

function AllCourses(props) {
  const [term, setTerm] = useState();
  const location = useLocation();
  const termsLinks = useContext(TermsContext);
  const navigate = useNavigate();

  function handleTermChange(e) {
    //console.log(e.target.value);
    const changeTerm = e.target.value.toLowerCase().replaceAll(" ", "_");
    navigate(`/${changeTerm}`);
  }

  useEffect(() => {
    let termPath = location.pathname.substr(1).split("_");
    let termPathTitle = termPath.map((termTitle) => termTitle[0].toUpperCase() + termTitle.substr(1));

    setTerm(termPathTitle.join(" "));
  }, [handleTermChange]);

  //console.log(termsLinks);

  return (
    <div className={`page-schedule-term-${term}`}>
      <article>
        <h2 id="article-head">Class Schedule For {term}</h2>

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
