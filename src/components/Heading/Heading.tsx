import React from 'react';

import * as styles from './Heading.module.scss';

export const Heading: React.FC = props => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <h1 className={styles.heading}>{props.children}</h1>
      </div>
    </div>
  );
};
