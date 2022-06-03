import { useState, useEffect } from "react";
import useFetch from "./utils/useFetch";

export default function Sort(props) {
  const [courses, setCourses] = useState();
  const [groupedCourses, setGroupedCourses] = useState([]);
  const { get } = useFetch("./sample-data/");

  useEffect(() => {
    get("semester-subject-all_spring2022.json")
      .then((data) => {
        //console.log(data);
        setCourses(data.results[0].items);
      })
      .finally(() => {
        groupNames();
      });
  }, [get]);

  const groupNames = () => {
    const map = courses.reduce((acc, val) => {
      let char = val.subject_ldesc.charAt(0).toUpperCase();

      acc[char] = [].concat(acc[char] || [], val);
      return acc;
    }, {});
    const res = Object.keys(map).map((el) => ({
      letter: el,
      names: map[el],
    }));
    setGroupedCourses(res);
    //console.log(res);
  };

  return (
    <>
      <h1>Courses</h1>
      {groupedCourses &&
        groupedCourses.map((groupCourse) => (
          <div>
            <h3>{groupCourse.letter}</h3>
            <ul>
              {groupCourse.names.map((name) => {
              return <li>{name}</li>
              })}
            </ul>
          </div>
        ))}
    </>
  );
}
