const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

var app = express();
var PORT = process.env.PORT || 8080;

app.get("/", function(req, res) {
  res.json(path.join(__dirname, "public/index.html"));
});

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});