import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRated from "../Hooks/useTopRated";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import useTvshows from "../Hooks/useTvshows";
import useArrivingToday from "../Hooks/useArrivingToday";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();
  useTvshows();
  useArrivingToday();

  return (
    <div>
      <div className="w-screen h-auto absolute bg-gradient-to-b from-black z-20">
        <Header />
      </div>
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
