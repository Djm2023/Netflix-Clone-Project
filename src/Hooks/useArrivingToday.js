import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addArrrivingToday } from "../utils/movieSlice";

const useArrivingToday = () => {
  const dispatch = useDispatch();
  const fetchData = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/tv/airing_today`,
      options
    );
    const json = await data?.json();
    console.log("Arriving", json);
    dispatch(addArrrivingToday(json.results));
  };

  useEffect(() => {
    fetchData();
  }, []);
};

export default useArrivingToday;
