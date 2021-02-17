import React, { useState, useEffect } from "react";
import "./CSS/Row.css";
import axios from "./axios";
import Youtube from "react-youtube";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  const { movie_url, setMovie_url } = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };
  const movieClick = (movie) => {};

  return (
    <div className="row">
      <h2>{title} </h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => movieClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterlarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {movie_url && <Youtube videoId={movie_url} opts={opts} />}
    </div>
  );
}
export default Row;
