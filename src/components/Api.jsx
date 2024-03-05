import React, { useState } from "react";
import "../App.css";

const Api = () => {
  let api = {
    key: "0e74aa2e32e38df51f5acbe8ae9e3d6f",
    base: "https://api.openweathermap.org/data/2.5/weather",
  };
  let [search, setsearch] = useState("");

  let [weather, setweather] = useState({});

  function locsearch() {
    fetch(`${api.base}?q=${search}&appid=${api.key}&untis=metric`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setweather(data);
      });
  }
  return (
    <div className="main">
      <section>
        <input type="text" onChange={m => setsearch(m.target.value)} placeholder="search location" />
        <br />
        <br />
        <button onClick={locsearch}>Search</button>
      </section>
      {weather.main !== undefined ? (
        <div className="name">
          <h1>{weather.name}</h1>
          <p>{weather.main.temp}</p>
        </div>
      ) : (
        "data not found"
      )}
    </div>
  );
};

export default Api;
