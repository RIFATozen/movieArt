import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://twitter.com/RIFATozn" target="_blank">
        RIFAT Ozen
      </Link>
    </footer>
  );
}

export default Footer;
