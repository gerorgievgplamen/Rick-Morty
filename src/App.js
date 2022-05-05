import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Character from "./character";

function App() {
const [url, setUrl] = useState(
    "https://rickandmortyapi.com/api/character/?name="
  );
  const [info, setInfo] = useState({});
  const [results, setResults] = useState([]);
  
  useEffect(() => {
    console.log("url: ", url);
    console.log("info: ", info);
    console.log("results: ", results);
  }, [url, info, results]);

  useEffect(() => {
    axios
      .get(`${url}`)
      .then((result) => {
        setInfo(result.data.info);
        setResults(result.data.results);
      })
      .catch((error) => {
        console.log(error);
       
      })
  }, []);
  
  return (
    <main>
      <section className="characters">
        {results.map((result, index) => (
          <Character key={index} result={result} />
        ))}
      </section>
    </main>
  )
}
export default App;
