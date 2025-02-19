import express from "express";
import path from "path";
import "./db";
import movieRouter from "./movieRouter";

const PORT = 4000;
const app = express();

// JSON과 URL-encoded 데이터를 처리할 수 있도록 설정
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use("/", movieRouter);

// Codesanbox does not need PORT :)
app.listen(PORT, () => console.log(`✅  Server Ready!`));
