const express = require('express');
const movies = require('./routes/movies');

const app = express();
const port = 3001;

//MIDDLEWARE
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/movies', movies);

app.listen(port, () => {
  console.log(
    `App is listening on port: ${port}. Visit localhost: http://localhost:${port}`
  );
});
