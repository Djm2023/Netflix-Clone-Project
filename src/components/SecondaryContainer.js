import React from "react";

import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="-mt-72 relative z-20">
        <MovieList title={"Top-Rated"} movies={movies.topRated} />
        <MovieList title={"NowPlaying"} movies={movies.nowPlayingMovies} />
        <MovieList title={"TV Shows"} movies={movies.tvShows} />
        <MovieList title={"Arriving Today"} movies={movies.arrivingToday} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
        <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
