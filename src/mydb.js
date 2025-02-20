let movies = [
  {
    title: "WhiteLines",
    synopsis: "something about whitelines",
    year: 2021,
    rating: 5,
    genres: ["a", "b", "c"],
    id: 0,
  },
  {
    title: "Yella",
    synopsis: "something about yella",
    year: 2022,
    rating: 4,
    genres: ["d", "e", "f"],
    id: 1,
  },
];

export const getMovieById = (id) => {
  if (id < movies.length) {
    return movies[id];
  } else {
    return null;
  }
};

export const getMovies = () => {
  return movies;
};

export const getMovieByMinimumRating = (rating) => {
  return movies.filter((movie) => movie.rating >= Number(rating));
};

export const getMovieByMinimumYear = (year) => {
  return movies.filter((movie) => movie.rating >= Number(rating));
};

export const addMovie = (movie) => {
  movies.push(movie);
};
