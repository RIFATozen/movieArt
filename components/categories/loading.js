import React from "react";
import Skeleton from "@/components/skeleton";
import styles from "./styles.module.css";

function CategoriesLoading() {
  return (
    <div className={styles.categories}>
      {Array(1)
        .fill(null)
        .map((_, index) => (
          <Skeleton key={index} height={styles.h} />
        ))}
    </div>
  );
}

export default CategoriesLoading;
