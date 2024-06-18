import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shreyasi</h1>
        <p className={styles.description}>
          As a beginner in Full-Stack development, I'm diving deep into both
          Development and Data Structures & Algorithms (DSA). Check out some of
          my projects, and feel free to reach out. Let's join the nerdy world
          together, preferably over a cup of coffee! 🤡
        </p>
        <a href="mailto:shreyasit1792@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="my image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
