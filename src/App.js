import React from "react";
import { useEffect, useState } from "react";

import MovieCard from "./MovieCard";

import "./App.css";
import SearchIcon from "./search.svg";

// 9840a6c7
const Api_Url = "http://www.omdbapi.com?apikey=9840a6c7";

const App = () => {
  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${Api_Url}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Superman");
  }, []);

  return (
    <div className="app">
      <h1>MovieZone</h1>
      <div className="search">
        <input
          placeholder="Search for Movies.."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />

        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies found!!</h2>
        </div>
      )}
    </div>
  );
};

export default App;
