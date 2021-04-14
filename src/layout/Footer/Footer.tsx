import { Link } from 'gatsby';
import React from 'react';
import { StaticRouteUrls } from '../../Routes';

import * as styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h1>About Shawtown</h1>
              <p>
                Shawtown is a historic neighborhood located in the southwest corner of Eau Claire, WI and is rooted in
                lumber, traditions and a close-knit community. The Shawtown Neighborhood Association was formed in 2019.
              </p>
              <p className={styles.social}>
                <a
                  href={StaticRouteUrls.socialMedia.facebook()}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialAnchor}>
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href={StaticRouteUrls.socialMedia.twitter()}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialAnchor}>
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href={StaticRouteUrls.socialMedia.instagram()}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialAnchor}>
                  <i className="fab fa-instagram"></i>
                </a>
              </p>
            </div>
            <div className="col-sm">
              <h1>Upcoming Events</h1>
              <ul>
                <li>
                  <a href="#top">Steering Committee Meeting</a>
                </li>
                <li>
                  <a href="#top">Park Clean-Up</a>
                </li>
                <li>
                  <a href="#top">Tree Planting</a>
                </li>
              </ul>
            </div>
            <div className="col-sm">
              <h1>Our People</h1>
              <ul>
                <li>
                  <Link to={`${StaticRouteUrls.people()}#officers`}>Officers</Link>
                </li>
                <li>
                  <Link to={`${StaticRouteUrls.people()}#atLarge`}>At-Large Members</Link>
                </li>
                <li>
                  <a href="#top">Sub-Committees</a>
                </li>
              </ul>
            </div>
            <div className="col-sm">
              <h1>Documents</h1>
              <ul>
                <li>
                  <a href="#top">Bylaws</a>
                </li>
                <li>
                  <a href="#top">Boundaries</a>
                </li>
                <li>
                  <a href="#top">Who Do I Call?</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-sm">
              <div className={styles.copyright}>
                Copyright &copy; {new Date().getFullYear()} -{' '}
                <Link to={StaticRouteUrls.privacy()} className={styles.privacyAnchor}>
                  All Rights Reserved
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className={styles.printedFooter}>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h1>Stay Connected</h1>
              <div className={styles.stayConnected}>
                <a href="https://www.shawtown.org">www.shawtown.org</a>
                <a href="mailto:shawtown.eauclaire@gmail.com">shawtown.eauclaire@gmail.com</a>
              </div>
            </div>
            <div className="col-sm">
              <h1>Officers</h1>
              <ul>
                <li>President - Brad Candell</li>
                <li>Vice President - Aram Mann-Whitcombe</li>
                <li>Secretary - Tim Solfest</li>
                <li>Treasurer - Cindy Schlosser</li>
                <li>Information - Drew Kaiser</li>
              </ul>
            </div>
            <div className="col-sm">
              <h1>Members-at-Large</h1>
              <ul>
                <li>James Candell</li>
                <li>Charlie Kennedy</li>
                <li>Susie Risler</li>
                <li>Erin Shadbolt</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
