import { Link } from "gatsby";
import React from "react";
import { StaticRouteLinks, StaticRouteUrls } from '../../Routes';

import * as styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.navigation}>
            <Link to="/" className={styles.brand}>shawtown.org</Link>
            <StaticRouteLinks.About />
            <StaticRouteLinks.People />
            <StaticRouteLinks.Documents />
            <StaticRouteLinks.Meetings />
            <StaticRouteLinks.Events />
            <StaticRouteLinks.Projects />
            <StaticRouteLinks.Contact />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
