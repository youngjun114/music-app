import React from 'react';
import Header from '../header/header';
import Content from '../content/content';
import Sidebar from '../sidebar/sidebar';
import styles from './home.module.css';

const Home = () => {
  return (
    <>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Content />
      </div>
    </>
  );
};

export default Home;
