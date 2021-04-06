import React from 'react';
import * as styles from './Person.module.scss';

export interface PersonProps {
  name: string;
  title?: string;
  image?: string;
  residentSince?: number;
}

export const Person: React.FC<PersonProps> = (props) => {
  return (
    <div className={styles.wrapper}>
      {props.image &&
        <img src={props.image} className={styles.image} alt={props.name} />
      }

      {!props.image &&
        <div className={styles.image}><i className="fas fa-user-circle" /></div>
      }

      <div className={styles.name}>{props.name}</div>
      {props.title &&
        <div className={styles.title}>{props.title}</div>
      }
      <p className={styles.biography}>
        {props.children}
      </p>
      {props.residentSince &&
        <div className={styles.residentSince}>- {props.residentSince} -</div>
      }
    </div>
  )
}
