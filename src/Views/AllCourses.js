import { useState, useEffect, useContext } from "react";
import uuid from 'react-uuid'

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
  const [groupedCourses, setGroupedCourses] = useState([]);
  const [coursesData, setCoursesData] = useState([]);
  const { get } = useFetch("./sample-data/");
  const termsLinks = useContext(TermsContext);
  const navigate = useNavigate();

  let [searchParams, setSearchParams] = useSearchParams({ replace: true });
 
// useEffect1 
useEffect(() => {
  get("semester-subject-all_spring2022.json")
  .then((data) => {
    setCoursesData(data.results[0].items);
  })
}, []);

// useEffect2 
useEffect(() => {

  // This reducer groups the course by alpha

  const results = coursesData.reduce((r, e) => {

    // get first letter of name of current element
    let alpha = e.subject_ldesc[0];
  
    // if there is no property in accumulator with this letter create it
    if (!r[alpha]) r[alpha] = { alpha, courses: [e] }
  
    // if there is push current element to children array for that letter
    else r[alpha].courses.push(e);
    
    // return accumulator
    return r;

  }, {});
  // This returns grouped results as expected
  setGroupedCourses(Object.values(results))
}, [coursesData]);

// Build Likes for each course
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
  <>
  <div class="page-schedule-term-">
      <article>
        <h2 id="article-head" aria-hidden="true">
          {/* update with dynamic terms */}
          Class Schedule For Spring 2022
        </h2>
        <form>
   {/* minimal application: additional markup and a11y needed */}
   <fieldset>
            <label aria-hidden="true">Filter Courses</label>
            <input type="text" placeholder="Filter Courses"
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
            <select>
              <option value="Spring">Spring</option>
              <option value="Summer">Summer</option>
              <option value="Fall">Fall</option>
              <option value="Winter">Winter</option>
            </select>
          </fieldset>
        </form>
        <section>
    <ul>
  {groupedCourses
  .filter((filteredAlpha) => {
      let Alphafilter = searchParams.get("filter");
      if (!Alphafilter) return true;
      let letter = filteredAlpha.alpha.substring(0,1).toLowerCase();
      return letter.startsWith(Alphafilter.substring(0,1).toLowerCase());
    }).map(groupedCourse => {
        return <div>
              <h3>{groupedCourse.alpha}</h3>
                <ul>
                    {groupedCourse.courses.filter((filteredCourse) => {
      let filter = searchParams.get("filter");
      if (!filter) return true;
      let course = filteredCourse.subject_ldesc.toLowerCase();
      return course.startsWith(filter.toLowerCase());
    }).map((course) => {
                          return <li key={course.subject_code}>
                             <QueryNavLink
                                style={({ isActive }) => {
                                  return {
                                    display: "block",
                                    margin: "1rem 0",
                                    color: isActive ? "red" : "",
                                  };
                                }}
                        to={course.subject_code}
                      >
                            {course.subject_ldesc}
                            </QueryNavLink>
                            </li>
                          })}
                </ul>
          </div>
  })} 
  </ul>
  </section>
  </article>
  </div>
</>
)
  
}

 

export default AllCourses;
