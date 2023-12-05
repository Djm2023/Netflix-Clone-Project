import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    topRated: null,
    upcomingMovies: null,
    tvShows: null,
    arrivingToday:null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action?.payload;
    },
    addTopRated: (state, action) => {
      state.topRated = action?.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action?.payload;
    },
    addTvShows: (state, action) => {
      state.tvShows = action?.payload;
    },
    addArrrivingToday : (state,action) => {
      state.arrivingToday = action?.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRated,
  addUpcomingMovies,
  addTvShows,
  addTrailerVideo,
  addArrrivingToday
} = movieSlice.actions;
export default movieSlice.reducer;
