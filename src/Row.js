import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";

// base url for images
const img_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
  //   use of sue states
  const [movies, setMovies] = useState([]);

  //   Run a code when a call
  useEffect(() => {
    //   run once on a page loads due to []
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);
console.log(movies);
  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>

      {/* container -> slides / posters */}
      <div className="row_container">
        {/* row posters */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_card ${ isLargeRow && "row_largeCard"}`}
            src={`${img_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
