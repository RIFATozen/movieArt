import FeaturedMovie from "@/components/featured-movie";
import React from "react";

function MovieContainer({movie}) {
  return (
    <div>
      <FeaturedMovie movie={movie} isCompact={false} />
    </div>
  );
}

export default MovieContainer;
