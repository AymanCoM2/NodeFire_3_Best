var express = require("express");

const { human } = require("./dabo");

var app = express();
const PORT = process.env.PORT || 5050;

app.get("/humans", human);

app.get("/", (req, res) => {
  res.send("This is my demo project");
});

app.listen(PORT, function () {
  console.log(`Demo project at: ${PORT}!`);
});
