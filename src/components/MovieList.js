import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  
  return (
    <div className="w-screen h-72 px-14 bg-transparent">
      <h1 className="py-4 text-xl text-white">{title}</h1>
      <div className="flex overflow-x-scroll scroll">
        {movies?.map((movie) => (
          <div key={movie.key}>
            <MovieCard key={movie.key} posterPath={movie.poster_path} />
          </div>
        ))}
      </div>
    </div>
  );
};
//
export default MovieList;
