import { useState, useEffect, useContext } from "react";
import "./AllCourses.css";
import {
  useNavigate,
  useLocation,
  NavLink,
  useSearchParams,
} from "react-router-dom";
import { TermsContext } from "../App";
import useFetch from "../Components/utils/useFetch";

function AllCourses() {
  const [courses, setCourses] = useState(null);
  const termsLinks = useContext(TermsContext);
  const navigate = useNavigate();
  const { get } = useFetch("./sample-data/");
  let [searchParams, setSearchParams] = useSearchParams({ replace: true });

  useEffect(() => {
    // Todo
    // get(currentPath) for api
    get("semester-subject-all_spring2022.json").then((data) => {
      setCourses(data.results[0].items);
    });
  }, []);

  function QueryNavLink({ to, ...props }) {
    let location = useLocation();
    return <NavLink to={to + location.search} {...props} />;
  }

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
            <input
              value={searchParams.get("filter") || ""}
              onChange={(event) => {
                let filter = event.target.value;
                if (filter) {
                  setSearchParams({ filter }, { replace: true });
                } else {
                  setSearchParams({}, { replace: true });
                }
              }}
            />
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
                courses
                  .filter((filteredCourse) => {
                    let filter = searchParams.get("filter");
                    if (!filter) return true;
                    let name = filteredCourse.subject_ldesc.toLowerCase();
                    return name.startsWith(filter.toLowerCase());
                  })
                  .map((filteredCourse) => (
                    <li key={filteredCourse.subject_code}>
                      <QueryNavLink
                        style={({ isActive }) => {
                          return {
                            display: "block",
                            margin: "1rem 0",
                            color: isActive ? "red" : "",
                          };
                        }}
                        to={filteredCourse.subject_code}
                      >
                        {filteredCourse.subject_ldesc}
                      </QueryNavLink>
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
