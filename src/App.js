import React,{useState,useEffect} from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Semesters from "./Views/Semesters";
import AllCourses from "./Views/AllCourses";
import CourseDetails from "./Views/CourseDetails";
import Breadcrumbs from "./Components/Breadcrumbs";
import useFetch from "./Components/utils/useFetch";
export const TermsContext = React.createContext();


function App() {

  const [terms, setTerms] = useState([]);
  const { get } = useFetch("./sample-data/");

  useEffect(() => {

    get("semester-list_2022.json").then((data) => {
      setTerms(data.results[0].items);
    });

},[]);

  return (
    <BrowserRouter>
    <TermsContext.Provider value={terms}>
      <Breadcrumbs />
      <Routes>
        <Route path="/" element={<Semesters />} />
        <Route path="/:id" element={<AllCourses />} />
        <Route path="/:id/:id" element={<CourseDetails />} />
      </Routes>
    </TermsContext.Provider>
    </BrowserRouter>
  );
}

export default App;
