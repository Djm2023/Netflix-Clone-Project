import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addTvShows } from "../utils/movieSlice";
import { WINDOW_TIME } from "../utils/constants";

const useTvshows = () => {
  const dispatch = useDispatch();
  const fetchData = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/trending/tv/${WINDOW_TIME}
      `,
      options
    );
    const json = await data?.json();
    console.log("Hello honey",json)
    dispatch(addTvShows(json.results));
  };

  useEffect(() => {
    fetchData();
  }, []);
};

export default useTvshows;
