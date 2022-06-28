import ClassTable from "../Components/ClassTable";
import "./CourseDetails.css"
import { useState, useEffect } from "react";
import useFetch from "/Users/irt-web3/Documents/Class Scheduler/class-schedule/src/Components/utils/useFetch.js";
function CourseDetails() {

  const [Data, setData] = useState()
  const handleClick = (item) => {
    console.log(item)
  }

  useEffect(() => {
    const getData = async () => {
      const dataFromApi = await fetchData()
      setData(dataFromApi)
      console.log(dataFromApi)
    }
    getData()
  }, []);
  const fetchData = async () => {
    //TODO
    //Use Url parameter
    const res = await fetch("https://irt-test01.webhost-tst.csus.edu/api/cs/2022/fall/accy")
    const data = await res.json()
    //console.log(data)
    return data
  }
  return (
    <main>
      <article className="page-schedule-details">

        <aside className="side-nav ">
          <nav id="myScrollspy">
            <ul className="nav nav-pills ul-button-stack list-group">
              <li className=""><a href="">Fall 2022</a></li>
              <li className=""><a href="#">Summer 2022</a></li>
              <li className=""><a href="./sprg2022.html">Spring 2022</a></li>
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
            {Data.map((item) =>
              <div className="toc-card">
                <p>{item.subject_code + " " + item.catalog_number}</p>
              </div>
            )}
          </div>
          <div className="table-section">
            {Data.map((item) =>
              <ClassTable section={item} />
            )}
          </div>
        </section>
      </article>
    </main>
  );
}

export default CourseDetails;