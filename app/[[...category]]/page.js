import HomeContiner from "@/containers/home";
import {
  getSingleCategory,
  getCategories,
  getTopRatedMovies,
  getPopularMovies,
  getSingleCategorySeries,
  getCategoriesSeries,
  getTopRatedSeries,
  getPopularSeries,
} from "@/services/movie";

export default async function Home({ params }) {
  let selectedCategory;
  if (params.category?.length > 0 && Number(params.category?.[0])) {
    const { results } = await getSingleCategory(params.category[0]);
    selectedCategory = results;
  } else if (
    params.category?.length > 0 &&
    params.category?.[0] === "series" &&
    Number(params.category?.[1])
  ) {
    const { results } = await getSingleCategorySeries(params.category[1]);
    selectedCategory = results;
  }
  if (params.category?.[0] === "series") {
    var [{ results: topRated }, { results: popular }, { genres: categories }] =
      await Promise.all([
        getTopRatedSeries(),
        getPopularSeries(),
        getCategoriesSeries(),
      ]);
  } else {
    var [{ results: topRated }, { results: popular }, { genres: categories }] =
      await Promise.all([
        getTopRatedMovies(),
        getPopularMovies(),
        getCategories(),
      ]);
  }

  return (
    <HomeContiner
      topRatedMovies={topRated}
      popularMovies={popular}
      categories={categories}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? selectedCategory.slice(0, 7) : [],
      }}
      title={params.category?.[0]}
      id={params.category?.[1]}
    />
  );
}
