import ClassTable from "../Components/ClassTable";
import "./CourseDetails.css"
import Data from "../sample-data/semester-subject-course_spring2022-accy.json"
function CourseDetails() {


  return (
    <div className="wrapper">
      <div className="details-table">
        <ClassTable />
      </div>
    </div>
  );
}

export default CourseDetails;