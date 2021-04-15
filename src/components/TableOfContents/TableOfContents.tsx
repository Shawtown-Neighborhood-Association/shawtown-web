import React from 'react';

import * as styles from './TableOfContents.module.scss';
export type TableOfContentsStyles = 'numbers' | 'bullets';

export interface TableOfContentsItemProps {
  title: string;
  url: string;
  items?: TableOfContentsItemProps[];
  depth: number;
  style?: TableOfContentsStyles;
}

export interface TableOfContentsProps {
  items: TableOfContentsItemProps[];
  style?: TableOfContentsStyles;
}

const TableOfContentsItem: React.FC<TableOfContentsItemProps> = props => {
  return (
    <>
      <a href={props.url}>{props.title}</a>
      {props.items && props.items.length > 0 && (
        <>
          <ul>
            {props.items.map((i, index) => (
              <li>
                <TableOfContentsItem key={props.title} {...i} depth={props.depth ? props.depth + 1 : 1} />
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export const TableOfContents: React.FC<TableOfContentsProps> = props => {
  return (
    <div className={styles.toc}>
      {props.items && props.items.length > 0 && (
        <ul>
          {props.items.map((i, index) => (
            <li>
              <TableOfContentsItem key={i.title} {...i} depth={1} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
