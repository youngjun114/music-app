import React, { useRef, useState } from 'react';
import styles from './header.module.css';
import { BsSearch } from 'react-icons/bs';

const Header = ({ onSubmit }) => {
  const inputRef = useRef();
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    let result = inputRef.current.value;
    formRef.current.reset();
    onSubmit(result);
  };

  return (
    <>
      <div className={styles.header_left}>
        <h2>wMusic</h2>
      </div>
      <form ref={formRef} className={styles.header_mid} onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type='text'
          className={styles.search}
          placeholder='Search Songs/Artists'
        />
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
