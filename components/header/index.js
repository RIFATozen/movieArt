"use client";
import React from "react";
import { BiCameraMovie } from "react-icons/bi";
import Link from "next/link";
import { setCookie } from "cookies-next";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

function Header({ lang }) {
  const addCustomCookie = (ln) => {
    setCookie("lang", ln);
  };
  const router = useRouter();
  if (!lang) {
    addCustomCookie("en-EN");
  }

  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
        <Link href="/" className={styles.logo}>
          <BiCameraMovie /> movieArt
        </Link>
        <nav className={styles.navigationMenu}>
          <Link href="/">{lang.value === "tr-TR" ? "Filmler" : "Movies"}</Link>
          <Link href="/series">
            {lang.value === "tr-TR" ? "Diziler" : "Series"}
          </Link>
          <div>
            <span
              onClick={() => {
                addCustomCookie("tr-TR");
                router.refresh();
              }}
              style={{
                textDecoration: lang.value === "tr-TR" ? "underline" : "none",
                cursor: "pointer",
              }}
            >
              Tr
            </span>{" "}
            /{" "}
            <span
              onClick={() => {
                addCustomCookie("en-EN");
                router.refresh();
              }}
              style={{
                textDecoration: lang.value === "en-EN" ? "underline" : "none",
                cursor: "pointer",
              }}
            >
              En
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
