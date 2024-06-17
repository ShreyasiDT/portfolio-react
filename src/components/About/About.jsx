import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="me with laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a learning front-end developer with experience of
                HTML,CSS,JavaScript and React.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Creating super-fast, amazing and projects that solve a purpose
                and are useful on day to day basis using APIs and back-end
                systems.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="dsa icon" />
            <div className={styles.aboutItemText}>
              <h3>DSA Engineer</h3>
              <p>
                I specialize in designing and optimizing data structures and
                algorithms for efficient problem-solving.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
