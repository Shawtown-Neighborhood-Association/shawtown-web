import React from 'react';
import classnames from 'classnames/bind';

import * as styles from './Section.module.scss';
const cx = classnames.bind(styles);

export interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Section: React.FC<SectionProps> = (props) => {
  return (
    <section id={props.id} className={cx(styles.wrapper, props.className)} style={props.style}>
      <div className="container">
        {props.children}
      </div>
    </section>
  )
}
