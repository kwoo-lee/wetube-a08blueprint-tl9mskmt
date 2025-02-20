import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear,
  addMovie,
} from "./mydb";

export const getHome = (req, res) => {
  const movies = getMovies();
  res.render("home", { pageTitle: "Movie!", movies });
};

export const getMovieDetail = (req, res) => {
  const { id } = req.params;
  const movie = getMovieById(id);
  res.render("movieDetail", { pageTitle: movie.title, movie });
};

export const getFilterMovie = (req, res) => {
  try {
    const { year, rating } = req.query;
    let pageTitle = "Searching By ";
    let filteredMovies;
    if (year) {
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

export const postFilterMovie = (req, res) => {
  try {
    const { year, rating } = req.body;
    res.redirect(`/filter?year=${year}&rating=${rating}`);
  } catch (error) {
    console.log(error._message);
    res.redirect(`/`);
  }
};

export const getAdd = (req, res) => {
  res.render("add", { pageTitle: "AddMovie" });
};

export const postAdd = (req, res) => {
  try {
    const { title, synopsis, genres } = req.body;
    const movies = getMovies();

    const newMovie = {
      title,
      synopsis,
      genres: genres.split(","),
      id: movies.length,
    };
    addMovie(newMovie);

    return res.redirect("/");
  } catch (error) {
    console.log(error._message);
  }
};
