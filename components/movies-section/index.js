"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.css";

function MoviesSection({ title, movies }) {
  const pathname = usePathname();
  return (
    <div className={styles.moviesSection}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.movies}>
        {movies.map((movie) => (
          <div className={styles.movie} key={movie.id}>
            <Link
              href={`/detail/${movie.id}?type=${
                pathname.slice(1, 7) === "series"
                  ? pathname.slice(1, 7)
                  : "movie"
              }`}
            >
              <Image
                fill
                unoptimized
                alt={movie.title}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesSection;
