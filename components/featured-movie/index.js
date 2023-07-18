"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { FaPlus } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./styles.module.css";

function FeaturedMovie({ movie = {}, isCompact = true, lang }) {
  const { poster_path, overview } = movie;
  const pathname = usePathname();
  const query = useSearchParams();
  const search = query.get("type");
  const notify = () =>
    toast.success("Saved in Watch Later!", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  return (
    <div className={styles.movieWrapper}>
      <h1 className={styles.movieTitle}>
        {movie.title ? movie.title : movie.name}
      </h1>
      <p
        className={`${styles.overview} ${
          isCompact ? styles.shortOverview : ""
        }`}
      >
        {overview}
      </p>
      <div className={styles.actionButtons}>
        <Link
          className={styles.playButton}
          href={`/detail/${movie.id}?type=${
            pathname.slice(1, 7) === "series" || search === "series"
              ? "series"
              : "movie"
          }`}
        >
          {lang?.value === "tr-TR" ? "Oynat" : "Play"}
        </Link>
        <div>
          <button onClick={notify} className={styles.addButton}>
            <FaPlus />
          </button>
          <ToastContainer
            position="bottom-right"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      </div>
      <div className={styles.moviePoster}>
        <div className={styles.moviePosterOverlay}></div>
        <Image
          unoptimized
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={movie.title ? movie.title : movie.name}
          fill
        />
      </div>
    </div>
  );
}
export default FeaturedMovie;
