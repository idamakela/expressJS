const express = require('express');
const movies = require('./routes/movies');

const app = express();
const port = 3005;

//MIDDLEWARE
app.use(express.json());

//API KEY
const validApiKey = '8';

const authenticateApiKey = (req, res, next) => {
  const apiKey = req.query.apiKey;

  if (!apiKey) {
    return res.status(401).json({ message: 'No movies for you! You are missing an API key!' });
  }

  if (apiKey !== validApiKey) {
    return res.status(403).json({ message: 'Invalid API key' });
  }

  next();
};

app.use((req, res, next) => {
  authenticateApiKey(req, res, next);
});

// TEST
app.get('/', (req, res) => {
  res.send('Hello there! You have a valid API key, visit http://localhost:PORT/movies?apiKey=API_KEY to view the data!');
});

app.use('/movies', movies);

app.listen(port, () => {
  console.log(`App is listening on port: ${port}. Visit localhost: http://localhost:${port}`);
});
