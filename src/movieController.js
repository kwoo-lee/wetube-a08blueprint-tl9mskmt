import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear,
} from "./db";

let movies = [
  {
    title: "WhiteLines",
    description: "something about whitelines",
    year: 2021,
    rating: 5,
    keywords: ["a", "b", "c"],
    id: 0,
  },
  {
    title: "Yella",
    description: "something about yella",
    year: 2022,
    rating: 4,
    keywords: ["d", "e", "f"],
    id: 1,
  },
];

export const home = (req, res) => {
  //console.log(movies);
  res.render("home", { pageTitle: "Movie!", movies });
};

export const filterPost = (req, res) => {
  const { year, rating } = req.body;

  console.log("filterPost");
  console.log(year, rating);
  res.redirect(`/filter?year=${year}&rating=${rating}`);
};

export const movieDetail = (req, res) => {
  const { id } = req.params;
  const movie = movies[id];
  console.log(movie.keywords);
  res.render("movieDetail", { pageTitle: movie.title, movie });
};

export const filterMovie = (req, res) => {
  const { year, rating } = req.query;
  console.log(year, rating);
  try {
    let pageTitle = "Searching By ";
    let filteredMovies;
    if (year && rating) {
      pageTitle += `Year ${year} and Rating ${rating}!`;
      filteredMovies = movies.filter(
        (movie) => movie.year === Number(year) && rating === Number(rating)
      );
    } else if (year) {
      pageTitle += `Year ${year}!`;
      filteredMovies = movies.filter((movie) => movie.year === Number(year));
    } else if (rating) {
      pageTitle += `Rating ${rating}!`;
      filteredMovies = movies.filter(
        (movie) => movie.rating === Number(rating)
      );
    }

    console.log("filtered: ", filteredMovies);
    res.render("home", {
      pageTitle,
      movies: filteredMovies,
    });
  } catch (error) {
    console.log(error._message);
    res.redirect(`/`);
  }
};
