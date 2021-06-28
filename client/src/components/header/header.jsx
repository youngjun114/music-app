import React from 'react';
import styles from './header.module.css';
import { BsSearch } from 'react-icons/bs';

const Header = () => {
  return (
    <>
      <div className={styles.header_left}>
        <h2>wMusic</h2>
      </div>
      <form className={styles.header_mid}>
        <input type='text' className={styles.search} placeholder='Search' />
        <button type='submit' className={styles.search_button}>
          <BsSearch className={styles.search_icon} />
        </button>
      </form>

      <div className={styles.header_right}>
        <button className={styles.sign_out}>Sign Out</button>
      </div>
    </>
  );
};

export default Header;
