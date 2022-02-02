const express = require('express');
const path = require('path');
const axios = require('axios');

const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', '*');
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  next();
});

app.get('/tweets', (req, res) => {
  axios.get('https://api.twitter.com/2/users/21102279/tweets?max_results=50', {
          headers: {Authorization: `Bearer ${process.env.AUTHORIZATION}`}
      }).then((response) => {
          res.send(response.data);
      }).catch((error) => {
          console.error(error);
      });
});

app.get('/followers', (req, res) => {
  axios.get('https://api.twitter.com/2/users/21102279/followers?user.fields=profile_image_url', {
          headers: {Authorization: `Bearer ${process.env.AUTHORIZATION}`}
      }).then((response) => {
          res.send(response.data);
      }).catch((error) => {
        // res.status({ status: 500 }).json({ message:'internal server error' });

          res.status(error.response.status).send({message: 'Too many requests'});
      });
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
  console.error(`Node ${isDev ? 'dev server' : 'cluster worker '+process.pid}: listening on port ${PORT}`);
});