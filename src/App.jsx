import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { useEffect, useState } from "react";

function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const url = "../data.json";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setCountriesData(json);
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <Header />
      <Main countriesData={countriesData} query={query} setQuery={setQuery} />
    </div>
  );
}

export default App;
