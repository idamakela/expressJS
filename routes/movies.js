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

  const requiredData = [
    newMovie.Title,
    newMovie.Year,
    newMovie.Released,
    newMovie.Genre,
  ];

  const emptyRequiredData = requiredData.every(
    (item) => item !== '' && item !== undefined
  );

  const checkPattern = /^\d{4,}$/;
  const correctRequiredData = checkPattern.test(newMovie.Year);

  if (!emptyRequiredData || !correctRequiredData) {
    return res.status(400).json({
      message:
        'Please fill in the required data to be able to proceed: Title, Year, Released and Genre.',
    });
  }

  newID++;

  movies.push(newMovie);
  res.status(201).json(newMovie);
});

//PUT updates into a specific movie
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const movie = req.body.movie;
  const index = movies.findIndex((mov) => mov.imdbID === id);

  if (index === -1) {
    return res
      .status(404)
      .json({ message: 'No movie with that ID was found!' });
  }

  const requiredData = [movie.Title, movie.Year, movie.Released, movie.Genre];

  const emptyRequiredData = requiredData.every(
    (item) => item !== '' && item !== undefined
  );

  const checkPattern = /^\d{4,}$/;
  const correctRequiredData = checkPattern.test(movie.Year);

  if (!emptyRequiredData || !correctRequiredData) {
    return res.status(400).json({
      message:
        'Please fill in the required data to be able to proceed: Title, Year, Released and Genre.',
    });
  }

  const updatedMovie = { ...movies[index], ...movie };
  movies[index] = updatedMovie;

  res.json(updatedMovie);
});

// DELETE specific movie
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const movie = movies.find((mov) => mov.imdbID === id);

  if (!movie) {
    return res
      .status(404)
      .json({ message: 'No movie with that ID was found!' });
  }

  const newMoviesData = movies.filter((mov) => mov.imdbID !== id);
  movies = newMoviesData;

  res.status(204).json({ message: 'Movie successfully deleted' });
});

module.exports = router;
