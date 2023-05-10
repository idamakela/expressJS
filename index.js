const express = require('express');
const movies = require('./routes/movies')

const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(port, () => {
    console.log(
      `App is listening on port: ${port}. Visit localhost: http://localhost:${port}`
    );
})