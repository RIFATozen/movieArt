"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import styles from "./styles.module.css";

function Categories({ categories }) {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const visibleCategories = categories.slice(
    0,
    windowWidth && windowWidth < 450 ? 3 : 5
  );

  return (
    <div className={styles.categories}>
      {visibleCategories.map((category) => (
        <Link
          key={category.id}
          className={styles.category}
          href={
            categories[0].name === "Action" || categories[0].name === "Aksiyon"
              ? `/${category.id}`
              : `/series/${category.id}`
          }
        >
          <div className={styles.name}>
            {category.name.indexOf("&") > -1
              ? category.name.split("&")[0]
              : category.name}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Categories;
