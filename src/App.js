import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Semesters from "./Views/Semesters";
import AllCourses from "./Views/AllCourses";
import CourseDetails from "./Views/CourseDetails";
import BreadCrumbs from "./Components/BreadCrumbs";


function App() {

  return (
      <BrowserRouter>
      <BreadCrumbs />
        <Routes>
          <Route path="/" element={<Semesters />} />
          <Route path="/:id" element={<AllCourses />} />
          <Route path="/:id/:id" element={<CourseDetails />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
