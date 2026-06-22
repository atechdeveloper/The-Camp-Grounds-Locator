const express = require("express");
const path = require("path");
const Campground = require("./models/campground.js");

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mountain-camp");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const app = express();
const port = 3000;

// === CORRECT VIEW ENGINE SETUP ===
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // ← MUST be "views" (plural)

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/campgrounds", async (req, res) => {
  const camps = await Campground.find({});
  res.send(camps);
});

app.get("/makecampground", async (req, res) => {
  // const camp = new Campground({
  //   title: "My Backyard",
  //   description: "cheap camping",
  // });
  // await camp.save();
  res.send("No campground created");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
