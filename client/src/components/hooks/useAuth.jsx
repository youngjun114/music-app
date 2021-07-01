// custom react hook to handle authorization
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useAuth(code) {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    axios
      .post('http://localhost:3001/login', { code })
      .then((res) => {
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);
        //remove url params
        window.history.pushState({}, null, '/');
      })
      .catch(() => {
        window.location = '/';
      });
  }, [code]);

  //whenever refreshToken or expiresIn changes, then run this useEffect
  useEffect(() => {
    if (!refreshToken || !expiresIn) return;
    // Only do this refresh right before the thing expires
    const interval = setInterval(() => {
      axios
        .post('http://localhost:3001/refresh', { refreshToken })
        .then((res) => {
          setAccessToken(res.data.accessToken);
          setExpiresIn(res.data.expiresIn);
        })
        .catch(() => {
          window.location = '/';
        });
    }, (expiresIn - 60) * 1000);
    // if there is any error, wanted to make sure it is cleared so that I do not use incorrect refreshToken
    return () => clearInterval(interval);
  }, [refreshToken, expiresIn]);

  return accessToken;
}
