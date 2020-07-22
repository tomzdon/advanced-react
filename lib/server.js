import express from "express";
import config from "./config.js";

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (reg, res) => {
  res.render("index", { anwser: 42 });
});

app.listen(config.port, function listenHandler() {
  console.info(`Running on ${config.port}`);
});
