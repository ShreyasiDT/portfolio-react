import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shreyasi</h1>
        <p className={styles.description}>
          I'm a beginner at Full-Stack development,trying to fry my brain with
          oil of DSA and Development. Feel free to contact and have a look at
          some of work , join the nerdy world along with some coffee🤡.
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
