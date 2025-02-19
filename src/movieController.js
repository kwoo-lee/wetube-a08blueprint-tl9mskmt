import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear,
} from './db';

let movies = [
  { title: 'WhiteLines', id: 0 },
  { title: 'Yella', id: 1 },
];

export const home = (req, res) => {
  console.log(movies);
  res.render('home', { pageTitle: 'Movie!', movies });
};

export const movieDetail = (req, res) => {};
export const filterMovie = (req, res) => {};
