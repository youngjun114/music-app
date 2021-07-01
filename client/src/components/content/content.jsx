import React from 'react';
import styles from './content.module.css';

const Content = ({ items }) => {
  return (
    <div className={styles.content_container}>
      <div className={styles.list_container}>
        {/* {items.map((item) => {
          <h1>{item.artist}</h1>;
        })} */}
      </div>
    </div>
  );
};

export default Content;
