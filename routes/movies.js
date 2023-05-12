const express = require('express');
const router = express.Router();
const mockData = require('../mockData');

let movies = mockData;

//GET all movies
router.get('/', (req, res) => {
  res.json(movies);
});

//GET specific movie
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const movie = movies.find((mov) => mov.imdbID === id);

  if (!movie) {
    return res
      .status(404)
      .json({ message: 'No movie with that ID was found!' });
  }

  res.json(movie);
});

//POST a movie 
let newID = 64378;

router.post('/', (req, res) => {
  const movie = req.body.movie;
  const numID = newID.toString();
  const newMovie = {
    ...movie,
    imdbID: numID,
  };

  console.log(movie)
  console.log(newMovie)

  newID++

  movies.push(newMovie)
  res.json(newMovie)
})

//PUT updates into a specific movie
router.put('/:id', (req, res) => {

})

module.exports = router;
