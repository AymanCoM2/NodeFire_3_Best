var express = require("express");

const { human } = require("./dabo");
const { addHuman } = require("./addHuman");
const bodyParser = require("body-parser");

var app = express();
const PORT = process.env.PORT || 5050;

app.use(bodyParser.json());

app.get("/humans", human);
app.post("/addHuman", addHuman);

app.get("/", (req, res) => {
  res.send("This is my demo project");
});

app.listen(PORT, function () {
  console.log(`Demo project at: ${PORT}!`);
});
