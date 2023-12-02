import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <div className="w-screen h-auto bg-gradient-to-b from-black">
        <Header />
      </div>
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
