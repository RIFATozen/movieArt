import MovieContainer from "@/containers/movie";
import React from "react";
import { notFound } from "next/navigation";
import { getMovie, getSeries } from "@/services/movie";

async function MoviePage({ params, searchParams }) {
  var detail;
  if (searchParams.type === "movie") {
    detail = await getMovie(params.id);
  } else if (searchParams.type === "series") {
    detail = await getSeries(params.id);
  } else {
    notFound();
  }
  return <MovieContainer movie={detail} />;
}

export default MoviePage;
