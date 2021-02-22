import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./CSS/Banner.css";

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backdropPosition: "center center"
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_header">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <h1 className="banner_rating"> rating {movie?.vote_average}</h1>
      </div>
    </header>
  );
}

export default Banner;
