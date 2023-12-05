import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addTopRated } from "../utils/movieSlice";

const useTopRated = () => {
  const dispatch = useDispatch();
  const fetchData = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated
      `,
      options
    );
    const json = await data?.json();
    dispatch(addTopRated(json.results));
  };

  useEffect(() => {
    fetchData();
  }, []);
};

export default useTopRated;
