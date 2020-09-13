const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3001;
const homepageList = require("./Home/HomepageData.js");

app.get("/homepageList", (req, res) => res.send(homepageList));

app.use(express.static(path.join(__dirname, "../../build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../../build", "index.html"));
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
