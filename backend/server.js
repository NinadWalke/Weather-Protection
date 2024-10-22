if(process.env.ENVIRONMENT !== "Production") {
    require('dotenv').config();
}

// Requiring packages
const express = require('express');
const mongoose = require('mongoose');
const passport = require("passport"); // Passport
const LocalStrategy = require("passport-local"); // Passport strategy
const session = require("express-session"); // Express sessions

// MongoDB connection settings
const dbURI = 'mongodb://127.0.0.1:27017/sunstrokesystem';  // Local DB url

main()
  .then(() => {
    console.log("Connection to MongoDB successful!");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB!\n" + err);
  });

async function main() {
  await mongoose.connect(dbURI);
}

// Express server setup
const app = express();
const port = 3000;

// Routes & Server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

// Handling graceful shutdowns
process.on('SIGINT', async () => {
    console.log('Gracefully shutting down...');
    await mongoose.connection.close();
    process.exit(0);
});
