const express = require('express');
const spotifyWebApi = require('spotify-web-api-node');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
//removes all cors errors
app.use(cors());

app.use(bodyParser.json());

app.post('/refresh', (req, res) => {
  const refreshToken = req.body.refreshToken;
  const spotifyApi = new spotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId: '661d4ac9edc74b109279cb25de7cf7cd',
    clientSecret: '823e880f4d214e70a800db195c0362b9',
    refreshToken,
  });

  // clientId, clientSecret and refreshToken has been set on the api object previous to this call.
  spotifyApi
    .refreshAccessToken()
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((err) => {
      console.log('RefreshToken Error', err);
      res.sendStatus(400);
    });
});

app.post('/login', (req, res) => {
  const code = req.body.code;
  const spotifyApi = new spotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId: '661d4ac9edc74b109279cb25de7cf7cd',
    clientSecret: '823e880f4d214e70a800db195c0362b9',
  });

  spotifyApi //
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((err) => {
      console.log('Authorization Code Grant', err);
      res.sendStatus(400);
    });
});

app.listen(3001);
