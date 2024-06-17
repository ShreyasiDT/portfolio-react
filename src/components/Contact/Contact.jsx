import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";
export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="email Icon" />
          <a href="mailto:shreyasit1792@gmail.com">email</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn Icon"
          />
          <a href="https://www.linkedin.com/in/shreyasi-thamke-963065248/">
            linkedIn
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub Icon" />
          <a href="https://github.com/ShreyasiDT">github</a>
        </li>
      </ul>
    </footer>
  );
};
