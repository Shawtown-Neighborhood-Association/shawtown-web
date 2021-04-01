import React from "react";
import * as styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.navigation}>
            <a href="#top" className={styles.brand}>shawtown.org</a>
            <a href="#top">About</a>
            <a href="#top">People</a>
            <a href="#top">Documents</a>
            <a href="#top">Meetings</a>
            <a href="#top">Events</a>
            <a href="#top">Projects</a>
            <a href="#top">Contact</a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
