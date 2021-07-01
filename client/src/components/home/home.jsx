import React from 'react';
import styles from './home.module.css';
import { FcMusic } from 'react-icons/fc';

const AUTH_URL =
  'https://accounts.spotify.com/authorize?client_id=661d4ac9edc74b109279cb25de7cf7cd&response_type=code&redirect_uri=http://localhost:3000&scope=user-read-email%20user-read-private%20user-library-read%20user-library-modify';

const Home = () => {
  return (
    <div className={`${styles.banner} ${styles.fade_in}`}>
      <div className={styles.container}>
        <FcMusic className={styles.icon} />
        <div className={styles.content}>
          <h1>wMusic</h1>
          <h2>Start Listening Your Favorite Music</h2>
          <div className={styles.buttons}>
            <a href={AUTH_URL}>
              <button className={styles.sign_in}>
                Sign In With Spotify Account
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
