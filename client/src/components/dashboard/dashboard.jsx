import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Content from '../content/content';
import Sidebar from '../sidebar/sidebar';
import styles from './dashboard.module.css';
import useAuth from '../hooks/useAuth';
import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
  clientId: '661d4ac9edc74b109279cb25de7cf7cd',
});

const Dashboard = ({ code }) => {
  const [searchResults, setSearchResults] = useState([]);
  const accessToken = useAuth(code);

  const onSubmit = (search) => {
    spotifyApi
      .searchTracks(search) //
      .then((res) => {
        setSearchResults(res.body.tracks);
        // res.body.tracks.items.map((track) => {
        //   return {
        //     artist: track.artists[0].name,
        //     title: track.name,
        //     uri: track.uri,
        //     albumUrl: track.album.images[1],
        //   };
        // })
      })
      .then(console.log(searchResults));
  };

  // whenever accessToken changes, set accessToken to spotifyAPI
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  return (
    <>
      <div className={styles.header}>
        <Header onSubmit={onSubmit} />
      </div>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Content items={searchResults} />
      </div>
    </>
  );
};

export default Dashboard;
