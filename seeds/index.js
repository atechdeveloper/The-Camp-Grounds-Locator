const mongoose = require("mongoose");
const axios = require("axios");

const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");

// ===============================
// Pexels API Key
// ===============================
const PEXELS_API_KEY =
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

// ===============================

mongoose.connect("mongodb://localhost:27017/mountain-camp");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => {
  console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

// ------------------------------------
// Get Image from Pexels
// ------------------------------------

async function getImage() {
  const queries = [
    "camp",
    "mountain",
    "forest",
    "lake",
    "landscape",
    "hotel",
    "nature",
  ];

  const query = sample(queries);

  try {
    const response = await axios.get(
      `https://api.pexels.com/v1/search?query=${query}&per_page=30`,
      {
        headers: {
          Authorization: PEXELS_API_KEY,
        },
      },
    );

    const photos = response.data.photos;

    if (photos.length > 0) {
      return sample(photos).src.large;
    }
  } catch (err) {
    console.log(err.message);
  }

  // fallback image
  return "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg";
}

// ------------------------------------
// Seed Database
// ------------------------------------

const seedDB = async () => {
  await Campground.deleteMany({});

  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);

    const price = Math.floor(Math.random() * 27) + 10;

    const image = await getImage();

    const camp = new Campground({
      location: `${cities[random1000].city}, ${cities[random1000].state}`,

      title: `${sample(descriptors)} ${sample(places)}`,

      image: image,

      description: "Any description about the place!",

      price: price,
    });

    await camp.save();

    console.log(`Saved ${i + 1}`);
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
