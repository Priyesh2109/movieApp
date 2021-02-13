import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios";

function Row({ title }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
    }
    fetchData();
  }, []);
  return (
    <div className="s">
      <h2>{title} </h2>
    </div>
  );
}
export default Row;
