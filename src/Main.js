import React, { useState, useEffect } from "react";
import BreadCrumbs from "./Components/BreadCrumbs";
import App from "./App";
import useFetch from "./Components/utils/useFetch";
export const TermsContext = React.createContext();

export default function Main() {
  const [terms, setTerms] = useState([]);
  const { get } = useFetch("./sample-data/");

  useEffect(() => {

    get("semester-list_2022.json").then((data) => {
      setTerms(data.results[0].items);
    });


  }, []);

  console.log(terms);

  return (
    <TermsContext.Provider value={terms}>
      <App />
    </TermsContext.Provider>
  );
}
