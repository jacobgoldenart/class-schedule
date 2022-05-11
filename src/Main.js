import React, { useState, useEffect } from "react";
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


  },[]);


  return (
    <TermsContext.Provider value={terms}>
    {console.log(`this is terms context ${terms}`)}
      <App />
    </TermsContext.Provider>
  );
}
