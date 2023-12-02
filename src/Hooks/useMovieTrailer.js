import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const fetchData = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      options
    );
    const json = await data?.json();

    const trailerFilter = json?.results.filter(
      (video) => video.type === "Trailer"
    );

    const trailerVideoCondition = trailerFilter?.length
      ? trailerFilter[0]
      : json.results[0];
    dispatch(addTrailerVideo(trailerVideoCondition));
  };

  useEffect(() => {
    fetchData();
  }, []);
};

export default useMovieTrailer;
