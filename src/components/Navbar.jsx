import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../utils";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Shreyasi✨
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={getImageUrl("nav/menuIcon.png")}
          alt="menu-button"
        />
        <ul className={styles.menuItems}>
          <li>
            <a href="about">About me</a>
          </li>
          <li>
            <a href="skillSets ">Skills</a>
          </li>
          <li>
            <a href="projects">Projects</a>
          </li>
          <li>
            <a href="contacts">Contacts</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
