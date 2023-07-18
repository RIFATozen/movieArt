import { cookies } from "next/headers";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
  },
};

const API_URL = "https://api.themoviedb.org/3";

const fetchMovieApi = async (pathname, query = "") => {
  try {
    const cookieStore = cookies();
    const lang = cookieStore.get("lang");
    const res = await fetch(
      `${API_URL}${pathname}?language=${lang.value}&${query}`,
      options
    );
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
};

const getSingleCategory = async (genreId) => {
  return fetchMovieApi("/discover/movie", `with_genres=${genreId}`);
};
const getCategories = async () => {
  return fetchMovieApi("/genre/movie/list", "page=1");
};
const getTopRatedMovies = async () => {
  return fetchMovieApi("/movie/top_rated");
};
const getPopularMovies = async () => {
  return fetchMovieApi("/movie/popular", "page=1");
};
const getMovie = async (movie_id) => {
  return fetchMovieApi(`/movie/${movie_id}`);
};

const getSingleCategorySeries = async (genreId) => {
  return fetchMovieApi("/discover/tv", `with_genres=${genreId}`);
};
const getCategoriesSeries = async () => {
  return fetchMovieApi("/genre/tv/list", "page=1");
};
const getTopRatedSeries = async () => {
  return fetchMovieApi("/tv/top_rated");
};
const getPopularSeries = async () => {
  return fetchMovieApi("/tv/popular", "page=1");
};
const getSeries = async (series_id) => {
  return fetchMovieApi(`/tv/${series_id}`);
};

export {
  getSingleCategory,
  getCategories,
  getTopRatedMovies,
  getPopularMovies,
  getMovie,
  getSingleCategorySeries,
  getCategoriesSeries,
  getTopRatedSeries,
  getPopularSeries,
  getSeries,
};
