const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");

mongoose.connect("mongodb://localhost:27017/mountain-camp");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const seedDB = async () => {
  await Campground.deleteMany({}); // Clear everything
  console.log("Old Campground deleted");

  const c = new Campground({
    title: "Purple Field",
    description: "a TEST of campground from seeder",
  });

  await c.save();
  console.log("Test Campground Seeded : ", c);

  // Close connection after seeding
  mongoose.connection.close();
};

seedDB();
