import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        movieDetails: null,
        recommendedMovies: null,
        casts: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload
        },
        addMovieDetails: (state, action) => {
            state.movieDetails = action.payload
        },
        addRecommendedMovies: (state, action) => {
            state.recommendedMovies = action.payload
        },
        addCasts: (state, action) => {
            state.casts = action.payload
        },
        

    }
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addMovieDetails, addRecommendedMovies, addCasts} = movieSlice.actions;
export default movieSlice.reducer;