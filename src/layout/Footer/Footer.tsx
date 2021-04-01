import React from 'react';

import * as styles from './Footer.module.scss';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h1>About Shawtown</h1>
                        <p>
                            Shawtown is a historic neighborhood located in the southwest corner of Eau Claire, WI and 
                            is rooted in lumber, traditions and a close-knit community. The Shawtown Neighborhood Association
                            was formed in 2019.
                        </p>
                        <p className={styles.social}>
                            <a href="http://www.google.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                            <a href="http://www.google.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                            <a href="http://www.google.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                        </p>
                    </div>
                    <div className="col-sm">
                        <h1>Upcoming Events</h1>
                        <ul>
                            <li><a href="#top">Steering Committee Meeting</a></li>
                            <li><a href="#top">Park Clean-Up</a></li>
                            <li><a href="#top">Tree Planting</a></li>
                        </ul>
                    </div>
                    <div className="col-sm">
                        <h1>Our People</h1>
                        <ul>
                            <li><a href="#top">Officers</a></li>
                            <li><a href="#top">At-Large Members</a></li>
                            <li><a href="#top">Sub-Committees</a></li>
                        </ul>
                    </div>
                    <div className="col-sm">
                        <h1>Documents</h1>
                        <ul>
                            <li><a href="#top">Bylaws</a></li>
                            <li><a href="#top">Boundaries</a></li>
                            <li><a href="#top">Who Do I Call?</a></li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm">
                        <div className={styles.copyright}>
                            Copyright &copy; {new Date().getFullYear()} - <a href="#top">All Rights Reserved</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer;