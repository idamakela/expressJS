const express = require('express');
const apiKeys = require('./apiKeys')
const movies = require('./routes/movies');
const apiKeyRouter = require('./routes/apiKeyHandler')

const app = express();
const port = 3005;

//MIDDLEWARE
app.use(express.json());

//API KEY
const validApiKey = apiKeys;
const apiEgg = 'egg';
const apiEggHint = 'hint'

const authenticateApiKey = (req, res, next) => {
  const apiKey = req.query.apiKey;

  if (!apiKey) {
    return res
      .status(401)
      .json({ message: 'No movies for you! You are missing an API key!' });
  }

  if (apiEgg === apiKey) {
    return res.send('Congratulations! You have found the easter egg, take this gold star! ⭐')
  }

  if (apiEggHint === apiKey) {
    return res.json({hintMessage: 'What is a common way to bold text in .md files? Go back to previous valid apiKey!'})
  }

  if (!validApiKey.includes(apiKey)) {
    return res.status(403).json({ message: 'Invalid API key' });
  }


  next();
};

app.use((req, res, next) => {
  authenticateApiKey(req, res, next);
});

// TEST
app.get('/', (req, res) => {
  res.json({
    message:
      'Hello there! You have a valid API key, please visit http://localhost:PORT/movies?apiKey=API_KEY to view the data!',
    tips: "Valid apiKey's are 8, 96 and 5, and can you find the easter **egg**?",
    hint: 'Use apiKey hint'
  });
});

app.use('/movies', movies);

app.listen(port, () => {
  console.log(
    `App is listening on port: ${port}. Visit localhost: http://localhost:${port}`
  );
});
