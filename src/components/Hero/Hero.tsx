import React from 'react';
import { StaticRouteUrls } from '../../Routes';

import * as styles from './Hero.module.scss';

export interface HeroProps {
    title: string;
    lead: string;
    image?: string;
    includeSocialMedia?: boolean;
}

export const Hero: React.FC<HeroProps> = props => {
    return (
        <div className={styles.container}>
            <div className="container">
                <div className={styles.hero}>
                    <div className={styles.socialMedia}>
                        {(!props.includeSocialMedia || props.includeSocialMedia === true) &&
                            <>
                                <a href={StaticRouteUrls.socialMedia.facebook()} target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                                <a href={StaticRouteUrls.socialMedia.twitter()} target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                                <a href={StaticRouteUrls.socialMedia.instagram()} target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                            </>
                        }
                    </div>
                    <div className={styles.titles}>
                        <h2 className={styles.lead}>{props.lead}</h2>
                        <h1 className={styles.title}>{props.title}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
