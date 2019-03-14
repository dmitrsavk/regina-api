const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fs = require("fs");

import Popular from "./popular/Popular";
import Articles from "./articles/Articles";

const app = express();

const popular = new Popular();
const articles = new Articles();

app.use(cookieParser());
app.use(bodyParser());

app.use(function(req, res, next) {
  const origins = [
    "http://regisha.ru",
    "http://regisha.ru:3000",
    "http://regisha.ru:8080"
  ];

  if (~origins.indexOf(req.headers.origin)) {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Credentials", true);
  }

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});

app.get("/api/article/:alias", articles.get);
app.get("/api/popular", popular.get);

app.listen(3001, () => console.log("listen 3001"));
