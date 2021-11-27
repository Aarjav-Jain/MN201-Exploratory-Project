const express = require("express");
const { states, mines } = require("./data");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "/public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/mines", (req, res) => {
  res.render("mines", { states, mines });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/:id", (req, res) => {
  const { id } = req.params;
  let mine;

  for (let d of mines) {
    if (parseInt(id) == d.id) {
      mine = { ...d };
    }
  }
  res.render("minedetails", { mine });
});

app.listen(PORT, () => {
  console.log(`app listening at PORT ${PORT}`);
});
