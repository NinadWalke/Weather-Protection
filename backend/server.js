if(process.env.ENVIRONMENT != "Production") {
    require('dotenv').config();
} 

// Requiring packages
const express = require('express');
const mongoose = require('mongoose');

main()
.then(() => {
    console.log("Connection to MongoDB successful!");
})
.catch((err) => {
    console.log("Error connecting to MongoDB...");
})

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/sunstrokesystem');       // Local DB url (You need MongoDB installed on your PC to use this)
}

// Server settings
const app = express();
const port = 3000;

// Routes & Server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})