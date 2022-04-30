import { useState, useEffect } from "react";
import useFetch from "./utils/useFetch";

export default function Sort(props) {
  const [courses, setCourses] = useState();
  const { get } = useFetch("./sample-data/");

  useEffect(() => {
    get("semester-subject-all_spring2022.json").then((data) => {
      console.log(data);
      setCourses(data.results[0].items);
    });
  }, []);

  //console.log(courses);

  return (
    <>
      <h1>Courses</h1>
      <ul>
        {courses &&
          courses.map((course) => (
            <li key={course.subject_code}>{course.subject_ldesc}</li>
          ))}
      </ul>
    </>
  );
}
