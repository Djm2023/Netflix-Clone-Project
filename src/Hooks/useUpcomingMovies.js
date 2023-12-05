import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const fetchData = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming
      `,
      options
    );
    const json = await data?.json();
    dispatch(addUpcomingMovies(json?.results));
  };

  useEffect(() => {
    fetchData();
  }, []);
};

export default useUpcomingMovies;
