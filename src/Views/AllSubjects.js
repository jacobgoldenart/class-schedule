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
            <CoursesFilter />
          </fieldset>
          <fieldset>
            <TermsSelector />
          </fieldset>
        </form>
        <section>
          <div>
            <GroupedCourses />
          </div>
        </section>
      </article>
    </div>
  );
}

export default AllCourses;
