import "./App.css";
import { createContext, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Semesters from "./Views/Semesters";
import AllCourses from "./Views/AllCourses";
import CourseDetails from "./Views/CourseDetails";
import useFetch from "./Components/utils/useFetch";
export const TermsContext = createContext();

function App() {
  const [terms, setTerms] = useState([]);
  const { get } = useFetch("./sample-data/");

  useEffect(() => {
    get("semester-list_2022.json").then((data) => {
      setTerms(data.results[0].items);
    });
  }, []);

  //console.log(terms);

  return (
    <TermsContext.Provider value={terms}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Semesters />} />
          <Route path="/:id" element={<AllCourses />} />
        </Routes>
      </BrowserRouter>
    </TermsContext.Provider>
  );
}

export default App;
