import express from "express";
import { home, movieDetail, filterMovie, filterPost } from "./movieController";

const movieRouter = express.Router();

movieRouter.route("/").get(home).post(filterPost);
movieRouter.route("/filter").get(filterMovie).post(filterPost);
movieRouter.get("/:id(\\d+)", movieDetail);

export default movieRouter;
