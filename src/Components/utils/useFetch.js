import { useState } from "react";

export default function useFetch(baseUrl) {
  const [loading, setLoading] = useState(true);

  function get(url) {
    //console.log(url)
    return new Promise((resolve, reject) => {
      fetch(baseUrl + url)
      // .then(res => res.text())          // convert to plain text to test api
      // .then(text => console.log(text))
        .then(response => response.json())
        .then(data => {
          if (!data) {
            setLoading(false);
            return reject(data);
          }
          setLoading(false);
          //console.log(data)
          resolve(data);
        })
        .catch(error => {
          setLoading(false);
          reject(error);
        });
    });
  }

  function post(url, body) {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + url, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      })
        .then(response => response.json())
        .then(data => {
          if (!data) {
            setLoading(false);
            return reject(data);
          }
          setLoading(false);
          resolve(data);
        })
        .catch(error => {
          setLoading(false);
          reject(error);
        });
    });
  }

  return { get, post, loading };
};
