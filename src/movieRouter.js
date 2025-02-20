import express from "express";
import {
  getHome,
  getMovieDetail,
  getFilterMovie,
  postFilterMovie,
  getAdd,
  postAdd,
} from "./movieController";

const movieRouter = express.Router();

movieRouter.route("/").get(getHome).post(postFilterMovie);
movieRouter.route("/filter").get(getFilterMovie).post(postFilterMovie);
movieRouter.route("/add").get(getAdd).post(postAdd);
movieRouter.get("/:id(\\d+)", getMovieDetail);

export default movieRouter;
