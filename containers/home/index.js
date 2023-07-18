import React from "react";
import FeaturedMovie from "@/components/featured-movie";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movies-section";
import { cookies } from "next/headers";

function HomeContiner({
  topRatedMovies = [],
  popularMovies = [],
  categories,
  selectedCategory,
  title,
  id,
}) {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang");
  return (
    <div>
      <FeaturedMovie movie={topRatedMovies?.[1]} lang={lang} />
      <Categories categories={categories.slice(0, 5)} />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={
            categories.find((genre) => {
              return `${genre.id}` === (id ? id : selectedCategory.id);
            })?.name
          }
          movies={selectedCategory.movies}
        />
      )}
      <MoviesSection
        title={
          title !== "series"
            ? lang?.value === "en-EN" || lang === undefined
              ? "Popular Movies"
              : "Popüler Filmler"
            : lang?.value === "en-EN" || lang === undefined
            ? "Popular Series"
            : "Popüler Diziler"
        }
        movies={topRatedMovies.slice(0, 7)}
      />
      <MoviesSection
        title={
          lang?.value === "en-EN" || lang === undefined
            ? "Your Favorites"
            : "Favorilerin"
        }
        movies={popularMovies.slice(8, 16)}
      />
    </div>
  );
}

export default HomeContiner;
