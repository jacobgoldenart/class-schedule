import { useState, useEffect, useContext } from "react";
import "./AllCourses.css";
import { useNavigate, Link } from "react-router-dom";
import { TermsContext } from "../App";
import useFetch from "../Components/utils/useFetch";

function AllCourses() {
  const [courses, setCourses] = useState(null);
  const termsLinks = useContext(TermsContext);
  const navigate = useNavigate();
  const { get } = useFetch("./sample-data/");

  useEffect(() => {
    // Todo
    // get(currentPath) for api
    get("semester-subject-all_spring2022.json").then((data) => {
      setCourses(data.results[0].items);
    });
  }, []);

  function handleTermChange(e) {
    // Todo on change Load JSON for specific term (based on pathname)
    // and re render content
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
              {courses &&
                courses.map((course) => (
                  <li key={course.subject_code}>
                    <Link to={course.subject_code}>{course.subject_ldesc}</Link>
                  </li>
                ))}
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
}

export default AllCourses;
