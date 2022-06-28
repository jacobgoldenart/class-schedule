import React,{useState,useEffect} from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Semesters from "./Views/Semesters";
import AllCourses from "./Views/AllCourses";
import CourseDetails from "./Views/CourseDetails";
import useFetch from "./Components/utils/useFetch";
import Breadcrumbs from "./Components/BreadCrumbs";
export const TermsContext = React.createContext();


function App() {

  const [terms, setTerms] = useState([]);
  const { get } = useFetch();

  useEffect(() => {

    get("/activesemesters").then((data) => {
      setTerms(data);
    });

},[]);

  return (
    <BrowserRouter>
    <Breadcrumbs />
    <TermsContext.Provider value={terms}>
      <Routes>
        <Route path="class-schedule/" element={<Semesters />} />
        <Route path="class-schedule/:id"  element={<AllCourses />} />
        <Route path="class-schedule/:id/:id"  element={<CourseDetails />} /> 
      </Routes>
    </TermsContext.Provider>
    </BrowserRouter>
  );
}

export default App;
